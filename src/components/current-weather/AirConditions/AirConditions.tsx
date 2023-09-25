import React, { useContext } from 'react';
import ErrorBox from '../../common/ErrorBox';
import AirConditionsItem from './AirConditionsItem';
import Layout from '../../common/Layout';
import { ErrorTypeEnum } from '../../../enums/error.enum';
import { WeatherContext, WeatherContextType } from '../../../contexts/WeatherContext';

const AirConditions = () => {
  const { currentWeather: data } = useContext<Partial<WeatherContextType>>(WeatherContext);
  const noDataProvided = !data || Object.keys(data).length === 0 || data.cod === '404';

  let content = (<ErrorBox flex="1" type={ErrorTypeEnum.ERROR} />);

  if (!noDataProvided) {
    content = (
      <>
        <AirConditionsItem
          title="Real Feel"
          value={`${Math.round(data.main.feels_like || data.main.temp)} °C`}
          type="temperature"
        />
        <AirConditionsItem
          title="Wind"
          value={`${data.wind.speed} m/s`}
          type="wind"
        />
        <AirConditionsItem
          title="Clouds"
          value={`${Math.round(data.clouds.all)} %`}
          type="clouds"
        />
        <AirConditionsItem
          title="Humidity"
          value={`${Math.round(data.main.humidity)} %`}
          type="humidity"
        />
      </>
    );
  }

  return (
    <Layout
      title="AIR CONDITIONS"
      content={content}
      mb="1rem"
      sx={{ marginTop: '2.9rem' }}
    />
  );
};

export default AirConditions;
