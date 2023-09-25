import React, { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import DailyForecastItem from './DailyForecastItem';
import ErrorBox from '../../common/ErrorBox';
import Layout from '../../common/Layout';
import { getDayOfWeekByTimestamp } from '../../../utils/datetime.utils';
import { ErrorTypeEnum } from '../../../enums/error.enum';
import { WeatherContext, WeatherContextType } from '../../../contexts/WeatherContext';
import { CityWeather } from '../../../types';

const DailyForecast = () => {
  const { currentWeather: data, currentForecast: forecastList } = useContext<Partial<WeatherContextType>>(WeatherContext);
  const noDataProvided = !data || !forecastList || Object.keys(data).length === 0 || data.cod === '404';

  let subHeader;
  if (!noDataProvided && forecastList.length > 0)
    subHeader = (
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontSize: { xs: 10, sm: 12 },
          textAlign: 'center',
          lineHeight: 1,
          color: '#04C4E0',
          fontFamily: 'Roboto Condensed',
          marginBottom: '1rem',
        }}
      >
        {forecastList.length === 1
          ? '1 available forecast'
          : `${forecastList.length} available forecasts`}
      </Typography>
    );

  let content = (<ErrorBox flex="1" type={ErrorTypeEnum.ERROR} />);
  if (!noDataProvided && forecastList.length > 0) {
    content = (
      <Grid
        item
        container
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: forecastList.length > 6 ? 'left' : 'center',
          width: 'fit-content',
        }}
        spacing="4px"
      >
        {forecastList.map((item, idx) => (
          <Grid
            key={idx}
            item
            xs={4}
            sm={2}
            display="flex"
            flexDirection="column"
            alignItems="left"
            sx={{
              marginBottom: { xs: '1rem', sm: '0' },
            }}
          >
            <DailyForecastItem item={item} data={data} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!noDataProvided && forecastList && forecastList.length === 0) {
    subHeader = (
      <ErrorBox
        flex="1"
        type={ErrorTypeEnum.INFO}
        margin="2rem auto"
        errorMessage="No available forecasts for tonight."
      />
    );
  }

  return (
    <Layout
      title={`${getDayOfWeekByTimestamp((data as CityWeather)?.dt).toUpperCase()}'S FORECAST`}
      content={content}
      sectionSubHeader={subHeader}
      sx={{ marginTop: '2.9rem' }}
      mb="0.3rem"
    />
  );
};

export default DailyForecast;
