import { Box } from '@mui/material';
import React from 'react';

type Props = {
  src: string,
}

const WeatherIconDetail = ({ src }: Props) => {
  return (
    <Box
      component="img"
      sx={{
        width: { xs: 50, sm: 60 },
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: '0 auto',
        padding: '0',
      }}
      alt="weather"
      src={src}
    />
  );
};

export default WeatherIconDetail;
