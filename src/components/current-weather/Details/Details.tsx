import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { weatherIcon } from '../../../utils/icon.utils';
import ErrorBox from '../../common/ErrorBox';
import CityDateDetail from './CityDateDetail';
import TemperatureWeatherDetail from './TemperatureWeatherDetail';
import WeatherIconDetail from './WeatherIconDetail';
import Layout from '../../common/Layout';
import { ErrorTypeEnum } from '../../../enums/error.enum';
import { WeatherContext, WeatherContextType } from '../../../contexts/WeatherContext';

const Details = () => {
  const { currentWeather: data } = useContext<Partial<WeatherContextType>>(WeatherContext);
  const noDataProvided = !data || Object.keys(data).length === 0 || data.cod === '404';
  let content = (<ErrorBox flex="1" type={ErrorTypeEnum.ERROR} />);

  if (!noDataProvided) {
    content = (
      <>
        <Grid
          item
          xs={4}
          sx={{
            height: '80px',
          }}
        >
          <CityDateDetail city={data.city} date={data.dt} />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            height: 80,
          }}
        >
          <TemperatureWeatherDetail
            temperature={data.main.temp}
            description={data.weather[0].description}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 80,
          }}
        >
          <WeatherIconDetail src={weatherIcon(`${data.weather[0].icon}.png`)} />
        </Grid>
      </>
    );
  }

  return <Layout title="CURRENT WEATHER" content={content} />;
};

export default Details;
