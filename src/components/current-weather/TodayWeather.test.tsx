import React from 'react';
import { render, screen } from '@testing-library/react';
import TodayWeather from './TodayWeather';

test('renders current weather view', () => {
  render(<TodayWeather />);
  const element = screen.getByText(/CURRENT WEATHER/i);
  expect(element).toBeInTheDocument();
});
