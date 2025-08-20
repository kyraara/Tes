import { render, screen } from '@testing-library/react';
import Card from '../Card';
import React from 'react';

test('renders children', () => {
  render(
    <Card>
      <p>hello</p>
    </Card>
  );
  expect(screen.getByText(/hello/i)).toBeInTheDocument();
});
