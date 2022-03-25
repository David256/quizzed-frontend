/* global test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuizPage from './QuizPage';
import SessionProvider from '../session/SessionProvider';

test('renders QuizPage', () => {
  render(
    <MemoryRouter>
      <SessionProvider>
        <QuizPage />
      </SessionProvider>
    </MemoryRouter>,
  );
  const title = screen.getByText(/quiz/i);
  expect(title).toBeInTheDocument();

  const button = screen.getByText(/next/i);
  expect(button).toBeInTheDocument();
});
