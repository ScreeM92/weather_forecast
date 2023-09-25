import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import WeeklyForecastItem from './WeeklyForecastItem';

type Props = {
  day: string,
  value: string,
  src: string,
}

const UnfedForecastItem = ({ day, value, src }: Props) => {
  return (
    <>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: { xs: 12, sm: 20, md: 32 },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: { xs: 400, sm: 600 },
            fontSize: { xs: 12, sm: 3, md: 14 },
            color: 'white',
            lineHeight: 1,
            height: '31px',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          {day}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 31,
          }}
        >
          <Box
            component="img"
            sx={{
              width: { xs: 24, sm: 28, md: 31 },
              height: 'auto',
              marginRight: 4,
            }}
            alt="weather"
            src={src}
          />
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontSize: { xs: 12, md: 14 },
              color: 'rgba(255,255,255, .8)',
              lineHeight: 1,
              fontFamily: 'Roboto Condensed',
            }}
          >
            {value}
          </Typography>
        </Box>
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
        <WeeklyForecastItem type="temperature" value={value} />
        <WeeklyForecastItem type="clouds" value={value} />
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
        <WeeklyForecastItem type="wind" value={value} />
        <WeeklyForecastItem type="humidity" value={value} />
      </Grid>
    </>
  );
};

export default UnfedForecastItem;
