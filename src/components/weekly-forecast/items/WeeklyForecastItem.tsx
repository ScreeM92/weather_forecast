import React from 'react';
import { Box, Typography } from '@mui/material';
import { IconType } from '../../../types/icon';
import IconItem from './IconItem';

type Props = {
  value: string,
  type: IconType,
}

const WeeklyForecastItem = ({ value, type }: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '31px',
        color: 'rgba(255, 255, 255, .7)',
        gap: { xs: '3px', sm: '4px', md: '6px' },
        width: '100%',
      }}
    >
      <IconItem type={type}/>
      <Typography
        component="p"
        sx={{
          fontSize: { xs: '12px', sm: '13px' },
          fontWeight: { xs: '400', sm: '600' },
          color: 'white',
          fontFamily: 'Poppins',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default WeeklyForecastItem;
