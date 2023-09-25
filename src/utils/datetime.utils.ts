import { DAYS } from '../constants/date';
import { Day } from '../types/day';

export function getWeekDays() {
  const dayInAWeek = new Date().getDay() + 1;
  const weekDays = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );

  return ['Today', ...weekDays];
}

export function transformDateFormat() {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  return year.toString().concat('-', month, '-', day, ' ', time);
}

export function getDatetime(): string {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: '2-digit' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  const time = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });

  return day.concat('.', month, '.', year.toString(), ' ', time);
}

export function getTime() {
  return new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Europe/Sofias',
  });
}

export function getDayOfWeekByTimestamp(timestamp: number) {
  return new Date(timestamp * 1000).toLocaleString('en-us', {  weekday: 'long' });
}

export function getDateByTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000);

  return `${date.getDate()} ${date.toLocaleString('en-us', {  month: 'long' })}`
}

export const normalizeDay = (day: Day) => {
  return {
    dt: Date.parse(day.date) / 1000,
    main: {
      temp: day.temp,
      humidity: day.humidity,
    },
    wind: {
      speed: day.wind,
    },
    clouds: {
      all: day.clouds
    },
    weather: [{ description: day.description, icon: day.icon.split('.')[0] }],
  };
}
