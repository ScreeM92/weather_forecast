import React from 'react';
import { Box, Grid, SvgIcon } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import { ReactComponent as HumidityIcon } from '../../../assets/humidity.svg';
import { IconType } from '../../../types/icon';
import { IconTypeEnum } from '../../../enums/icon.enum';

type Props = {
  type: IconType,
}

const AirConditionIcon = (props: Props) => {
    if (props.type === IconTypeEnum.TEMPERATURE) {
        return(<ThermostatIcon sx={{ fontSize: 18 }} />);
    }
    else if (props.type === IconTypeEnum.WIND) {
        return(<AirIcon sx={{ fontSize: 18 }} />);
    }
    else if (props.type === IconTypeEnum.CLOUDS) {
        return(<FilterDramaIcon sx={{ fontSize: 18 }} />);
    }

    // else -> IconTypeEnum.HUMIDITY
    return (
        <SvgIcon
        component={HumidityIcon}
        inheritViewBox
        sx={{ fontSize: 18 }}
        />
    );
};

export default AirConditionIcon;
