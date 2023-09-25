import { Grid } from '@mui/material';
import AirConditions from './AirConditions/AirConditions';
import DailyForecast from './Forecast/DailyForecast';
import Details from './Details/Details';

const TodayWeather = () => {
  return (
    <Grid container sx={{ padding: '3rem 0rem 0rem' }}>
      <Details />
      <AirConditions />
      <DailyForecast />
    </Grid>
  );
};

export default TodayWeather;
