import React from 'react';
import { SvgIcon } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { ReactComponent as HumidityIcon } from '../../../assets/humidity.svg';
import { IconType } from '../../../types/icon';

type Props = {
  type: IconType,
}

const IconItem = ({ type }: Props) => {
  if (type === 'temperature') {
    return (
      <ThermostatIcon
        sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }}
      />
    );
  }
  else if (type === 'wind') {
    return (
      <AirIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />
    );
  }
  else if (type === 'clouds') {
    return (
      <FilterDramaIcon
        sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }}
      />
    );
  }
  // else -> humidity

  return (
    <SvgIcon
      component={HumidityIcon}
      inheritViewBox
      sx={{
        fontSize: { xs: '15px', sm: '16px', md: '18px' },
      }}
    />
  );
};

export default IconItem;


