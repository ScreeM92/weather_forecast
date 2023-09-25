import React from 'react';
import { Box, Typography } from '@mui/material';
import { ForecastWeather } from '../../../types/forecast';
import { CityWeather } from '../../../types/openWeather';
import { weatherIcon } from '../../../utils/icon.utils';

type Props = {
  item: ForecastWeather,
  data: CityWeather,
}

const DailyForecastItem = ({ item, data }: Props) => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
        borderRadius: '8px',
        boxShadow:
          'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        textAlign: 'center',
        padding: '4px 0',
        width: '100%',
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '400',
          fontSize: { xs: '10px', sm: '12px' },
          color: 'rgba(255, 255, 255, .7)',
          lineHeight: 1,
          padding: '4px',
          fontFamily: 'Poppins',
        }}
      >
        {item.time}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          padding: '4px',
        }}
      >
        <Box
          component="img"
          sx={{
            width: { xs: 36, sm: 42 },
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: '0 auto',
          }}
          alt="weather"
          src={weatherIcon(`${data.weather[0].icon}.png`)}
        />
      </Box>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontWeight: '600',
          fontSize: { xs: 12, sm: 14 },
          color: 'white',
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: { xs: 8, md: 0 },
          fontFamily: 'Poppins',
        }}
      >
        {item.temperature}
      </Typography>
    </Box>
  );
};

export default DailyForecastItem;
