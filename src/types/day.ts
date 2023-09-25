export type Day = {
    date: string,
    temp: string,
    humidity: string,
    wind: string,
    clouds: string,
    description: string,
    icon: string,
}

export type ListWeekForecast = {
    list: Day[],
}