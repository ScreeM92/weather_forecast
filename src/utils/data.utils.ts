import { groupBy } from 'lodash';
import { WeatherMetadata } from '../types/weather';
import { ForecastResponse } from '../types/openWeather';
import { Forecast, ForecastWeather } from '../types/forecast';
import { Day } from '../types/day';

export const getAverage = (list: number[], isRound = true) => {
  if (isRound) {
    return Math.round(list.reduce((a, b) => a + b, 0) / list.length).toString();
  }

  return (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2);
}

export function getMostFrequentWeather(arr: string[]) {
  const hashmap = arr.reduce((acc: Record<string, number>, val: string) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
}

export const descriptionToIconName = (desc: string, list: WeatherMetadata[]) => {
  const iconName = list.find((item: WeatherMetadata) => item.description === desc);
  return iconName?.icon || 'unknown';
};

export const getWeekForecastWeather = (response: ForecastResponse | undefined, weatherMetadata: WeatherMetadata[]): Day[] => {
  if (!response || Object.keys(response).length === 0 || response.cod === '404') {
    return [];
  }

  const foreacastList: Forecast[] = [];
  const forecastDescription: WeatherMetadata[] = [];
  response.list.map((item, idx) => {
    const date = item.dt_txt.substring(0, 10);

    forecastDescription.push({
      date,
      description: item.weather[0].description,
    });
    foreacastList.push({
      date,
      temp: item.main.temp,
      humidity: item.main.humidity,
      wind: item.wind.speed,
      clouds: item.clouds.all,
    });

    return { idx, item };
  });

  const forecastGroupByDate = groupBy(foreacastList, 'date');
  const forecastDescrGroupByDate = groupBy(forecastDescription, 'date');
  const dayDescList = Object.keys(forecastDescrGroupByDate).map((key) => {
    let singleDayDescriptions = forecastDescrGroupByDate[key].map(
      (item: WeatherMetadata) => item.description
    );
    return getMostFrequentWeather(singleDayDescriptions);
  });

  const dayAvgsList: Day[] = [];
  Object.keys(forecastGroupByDate).forEach((key, idx) => {
    const dayTempsList: number[] = [];
    const dayHumidityList: number[] = [];
    const dayWindList: number[] = [];
    const dayCloudsList: number[] = [];

    for (let i = 0; i < forecastGroupByDate[key].length; i++) {
      const { temp, humidity, wind, clouds } = forecastGroupByDate[key][i];

      dayTempsList.push(temp);
      dayHumidityList.push(humidity);
      dayWindList.push(wind);
      dayCloudsList.push(clouds);
    }

    dayAvgsList.push({
      date: key,
      temp: getAverage(dayTempsList),
      humidity: getAverage(dayHumidityList),
      wind: getAverage(dayWindList, false),
      clouds: getAverage(dayCloudsList),
      description: dayDescList[idx],
      icon: descriptionToIconName(dayDescList[idx], weatherMetadata),
    });
  });

  return dayAvgsList;
};

export const getTodayForecastWeather = (
  response: ForecastResponse | undefined,
  date: string,
  timestamp: number,
): ForecastWeather[]=> {
  if (!response || Object.keys(response).length === 0 || response.cod === '404') {
    return [];
  }
    
  return (response.list.map((item) => {
    if (item.dt_txt.startsWith(date.substring(0, 10))) {
      if (item.dt > timestamp) {
        return {
          time: item.dt_txt.split(' ')[1].substring(0, 5),
          icon: item.weather[0].icon,
          temperature: Math.round(item.main.temp) + ' °C',
        };
      }
    }
    return null;
  }).filter(Boolean) as ForecastWeather[]);
};
