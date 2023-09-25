import { WeatherResponse, ForecastResponse } from "../types/openWeather";

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
const WEATHER_API_KEY = 'fc8f3ca8055dd72863a1d16ed519e260';

export async function fetchWeatherData(lat: number | string, lon: number | string): Promise<[WeatherResponse, ForecastResponse] | []> {
  try {
    const [weatherPromise, forecastPromise] = await Promise.all([
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
      fetch(
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      ),
    ]);

    const weatherResponse: WeatherResponse = await weatherPromise.json();
    const forcastResponse: ForecastResponse = await forecastPromise.json();
    return [weatherResponse, forcastResponse];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchCities(input: string): Promise<{ data: any[] } | undefined> {
  try {
    const response = await fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`,
      GEO_API_OPTIONS,
    );

    return await response.json();
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function fetchCity({ longitude, latitude }: { longitude: number, latitude: number }) {
  try {
    const response = await fetch(
      `${GEO_API_URL}/locations/${latitude}-${longitude}/nearbyCities`,
      GEO_API_OPTIONS
    );

    return await response.json();
  } catch (error) {
    console.log(error);
    return;
  }
}
