import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBox from './ErrorBox';
import { ErrorTypeEnum } from '../../enums/error.enum';

test('renders error view with internal error', () => {
  render(<ErrorBox type={ErrorTypeEnum.ERROR} />);
  const element = screen.getByText(/Internal error/i);
  expect(element).toBeInTheDocument();
});

test('renders error view with info message', () => {
    render(<ErrorBox type={ErrorTypeEnum.INFO} errorMessage='No available forecasts for tonight.' />);
    const element = screen.getByText(/No available forecasts for tonight./i);
    expect(element).toBeInTheDocument();
  });
  