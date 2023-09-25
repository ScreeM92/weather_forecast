import React from 'react';
import { render, screen } from '@testing-library/react';
import DefaultView from './DefaultView';

test('renders dafault view', () => {
  render(<DefaultView />);
  const element = screen.getByText(/Explore current weather data and 5-day forecast of more than 200,000 cities!/i);
  expect(element).toBeInTheDocument();
});
