/* global test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ResultPage from './ResultPage';
import SessionProvider from '../session/SessionProvider';

test('renders ResultPage', () => {
  render(
    <MemoryRouter>
      <SessionProvider>
        <ResultPage />
      </SessionProvider>
    </MemoryRouter>,
  );

  const title = screen.getByText(/results/i);
  expect(title).toBeInTheDocument();

  const list = screen.getByLabelText('results');
  expect(list).toBeInTheDocument();
});
