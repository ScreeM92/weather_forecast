import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home view', () => {
  render(<Home />);
  const element = screen.getByText(/Explore current weather data and 5-day forecast of more than 200,000 cities!/i);
  expect(element).toBeInTheDocument();
});
