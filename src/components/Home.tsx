import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Search from './search/Search';
import WeeklyForecast from './weekly-forecast/WeeklyForecast';
import TodayWeather from './current-weather/TodayWeather';
import { fetchWeatherData } from './../api/openWeather.service';
import { normalizeDay, transformDateFormat } from './../utils';
import CurrentDatetime from './common/CurrentDatetime';
import Logo from './../assets/logo.png';
import ErrorBox from './common/ErrorBox';
import { ALL_DESCRIPTIONS } from './../constants/date';
import { getTodayForecastWeather, getWeekForecastWeather } from './../utils';
import { ForecastResponse, WeatherResponse, CityWeather, Day, ListWeekForecast, SearchInput, ForecastWeather } from './../types';
import { ErrorTypeEnum } from './../enums/error.enum';
import LoadingWrapper from './common/loading/LoadingWrapper';
import DefaultView from './DefaultView';
import { WeatherContext } from '../contexts/WeatherContext';

function Home() {
  const [todayWeather, setTodayWeather] = useState<CityWeather>();
  const [currentWeather, setCurrentWeather] = useState<CityWeather>();
  const [currentForecast, setCurrentForecast] = useState<ForecastWeather[]>([]);
  const [weekForecast, setWeekForecast] = useState<ListWeekForecast>();
  const [weekForecastRes, setWeekForecastRes] = useState<ForecastResponse>();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);

  const getCurrentPositionSuccess = async (position: GeolocationPosition) => {
    searchChangeHandler({ value: `${position.coords.latitude} ${position.coords.longitude}` });
  }

  const getCurrentPositionError = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCurrentPositionSuccess, getCurrentPositionError);
    } else {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeDay = (day: Day, dayOrder: number): void => {
    setSelectedDay(dayOrder);
    setCurrentWeather((dayOrder > 0 ? { ...normalizeDay(day), city: currentWeather?.city } : todayWeather) as CityWeather);
    const todayForecastsList = getTodayForecastWeather(
      weekForecastRes as ForecastResponse,
      day.date,
      0,
    );
    setCurrentForecast(todayForecastsList);
  };

  const searchChangeHandler = async (enteredData: SearchInput) => {
    const [latitude, longitude] = enteredData.value.split(' ');

    setIsLoading(true);

    const currentDate = transformDateFormat();
    let now = Math.floor(new Date().getTime() / 1000);

    try {
      const [todayWeatherResponse, weekForecastResponse] = await fetchWeatherData(latitude, longitude);
      const todayForecastsList = getTodayForecastWeather(
        weekForecastResponse,
        currentDate,
        now
      );

      const weekForecastsList = getWeekForecastWeather(
        weekForecastResponse,
        ALL_DESCRIPTIONS
      );
      const city = enteredData.label ?? 'Current Location';
      const weather = { city, ...todayWeatherResponse as WeatherResponse };

      setWeekForecastRes(weekForecastResponse);
      setCurrentForecast(todayForecastsList);
      setTodayWeather(weather);
      setCurrentWeather(weather);
      setWeekForecast({ list: weekForecastsList });
      setSelectedDay(0);
    } catch (error) {
      setHasError(true);
    }

    setIsLoading(false);
  };

  let appContent = (<DefaultView />);
  if (currentWeather && currentForecast && weekForecast) {
    appContent = (
      <WeatherContext.Provider
        value={{
          currentWeather,
          currentForecast,
          weekForecast,
        }}
      >
        <Grid item xs={12} md={currentWeather ? 6 : 12}>
          <Grid item xs={12}>
            <TodayWeather />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <WeeklyForecast selectedDay={selectedDay} changeDay={changeDay} />
        </Grid>
      </WeatherContext.Provider>
    );
  } else if (hasError) {
    appContent = (
      <ErrorBox
        type={ErrorTypeEnum.ERROR}
        margin="3rem auto"
        flex="inherit"
        errorMessage="Something went wrong"
      />
    );
  } else if (isLoading) {
    appContent = (<LoadingWrapper />);
  }

  return (
    <>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: '100%',
            marginBottom: '1rem',
          }}
          >
            <Box
              component="img"
              sx={{
                height: { xs: 36, sm: 46, md: 66 },
                width: 'auto',
              }}
              alt="logo"
              src={Logo}
            />
            <CurrentDatetime />
        </Box>
        <Search onSearchChange={searchChangeHandler} />
      </Grid>
      {appContent}
    </>
  );
}

export default Home;
