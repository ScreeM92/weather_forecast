import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders search input', () => {
    render(<Search onSearchChange={()=>{}}/>);
    const search = screen.getByText(/Search for city/i);
    expect(search).toBeInTheDocument();
});