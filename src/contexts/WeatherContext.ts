import { createContext } from 'react';
import { CityWeather, ForecastWeather, ListWeekForecast } from '../types';

export type WeatherContextType = {
    currentWeather: CityWeather;
    currentForecast: ForecastWeather[];
    weekForecast: ListWeekForecast;
};

export const WeatherContext = createContext<Partial<WeatherContextType>>({});
