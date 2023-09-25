type Weather = {
    id: number,
    main: string,
    description: string,
    icon: string
}

type Clouds = {
    all: number
};

type Wind = {
    speed: number,
    deg: number,
    gust?: number,
}

type Forecast = {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: Weather[],
    clouds: Clouds,
    wind: Wind,
    visibility: number,
    pop: number,
    sys: {
        pod: string
    },
    dt_txt: string
};

export type City = {
    id: number,
    name: string,
    coord: {
        lat: number,
        lon: number
    },
    country: string,
    population: number,
    timezone: number,
    sunrise: number,
    sunset: number
}

export type ForecastResponse = {
    cod: string,
    message: number,
    cnt: number,
    list: Forecast[],
    city: City
}

export type WeatherResponse = {
    coord: {
        lon: number,
        lat: number
    },
    weather: Weather[],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: Wind,
    clouds: Clouds,
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: string
};

export type CityWeather = WeatherResponse & { city: string };