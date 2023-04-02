import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Home page has "Weather app" in toolbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather app/i);
  expect(linkElement).toBeInTheDocument();
});
