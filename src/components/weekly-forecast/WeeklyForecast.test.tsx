import React from 'react';
import { render, screen } from '@testing-library/react';
import WeeklyForecast from './WeeklyForecast';

test('renders weekly forecast view', () => {
  render(<WeeklyForecast selectedDay={0}  changeDay={()=>{}}/>);
  const element = screen.getByText(/WEEKLY FORECAST/i);
  expect(element).toBeInTheDocument();
});
