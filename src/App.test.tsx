import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app view', () => {
  render(<App />);
  const element = screen.getByText(/Explore current weather data and 5-day forecast of more than 200,000 cities!/i);
  expect(element).toBeInTheDocument();
});
