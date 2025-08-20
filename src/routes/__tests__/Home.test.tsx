import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../../hooks/useTheme';
import Home from '../Home';
import React from 'react';

test('renders hero heading', () => {
  render(
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
  expect(screen.getByText(/Kyra Aara/i)).toBeInTheDocument();
});
