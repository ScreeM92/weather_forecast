import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { getWeekDays } from '../../utils/datetime.utils';
import { weatherIcon } from '../../utils/icon.utils';
import WeeklyForecastItem from './items/WeeklyForecastItem';
import ErrorBox from '../common/ErrorBox';
import UnfedForecastItem from './items/UnfedForecastItem';
import DayWeatherDetails from './DayWeatherDetails';
import Layout from '../common/Layout';
import { Day } from '../../types/day';
import { ErrorTypeEnum } from '../../enums/error.enum';
import { WeatherContext, WeatherContextType } from '../../contexts/WeatherContext';

type Props = {
  selectedDay: number,
  changeDay: (day: Day, index: number) => void,
}

const WeeklyForecast = ({ selectedDay, changeDay }: Props) => {
  const forecastDays = getWeekDays();
  const { weekForecast: data } = useContext<Partial<WeatherContextType>>(WeatherContext);

  let content = (
    <div style={{ width: '100%' }}>
      <ErrorBox type={ErrorTypeEnum.ERROR} />
    </div>
  );

  if (data && data.list?.length > 0) {
    content = (
      <Grid
        item
        container
        display="flex"
        flexDirection="column"
        xs={12}
        gap="4px"
      >
        {data.list.map((item: Day, idx: number) => {
          return (
            <Grid
              item
              key={idx}
              xs={12}
              display="flex"
              alignItems="center"
              sx={{
                padding: '2px 0 2px',
                cursor: selectedDay !== idx ? 'pointer' : null,
                background: selectedDay === idx ? 
                  '#59aae7' :
                  'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
                boxShadow:
                  'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                borderRadius: 8,
              }}
              onClick={() => changeDay(item, idx)}
            >
              <DayWeatherDetails
                day={forecastDays[idx]}
                src={weatherIcon(`${item.icon}`)}
                description={item.description}
              />

              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WeeklyForecastItem
                  type="temperature"
                  value={Math.round(Number(item.temp)) + ' °C'}
                />
                <WeeklyForecastItem
                  type="clouds"
                  value={item.clouds + ' %'}
                />
              </Grid>

              <Grid
                container
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WeeklyForecastItem
                  type="wind"
                  value={item.wind + ' m/s'}
                />
                <WeeklyForecastItem
                  type="humidity"
                  value={item.humidity + ' %'}
                />
              </Grid>
            </Grid>
          );
        })}
        {data.list.length === 5 && (
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            sx={{
              padding: '2px 0 2px',
              background:
                'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
              boxShadow:
                'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              borderRadius: '8px',
              cursor: 'not-allowed',
            }}
          >
            <UnfedForecastItem
              day={forecastDays[5]}
              value="N/A"
              src={weatherIcon('unknown.png')}
            />
          </Grid>
        )}
      </Grid>
    );
  }

  return (
    <Layout
      title="WEEKLY FORECAST"
      content={content}
      mb=".8rem"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '3rem 0 0',
      }}
    />
  );
};

export default WeeklyForecast;
