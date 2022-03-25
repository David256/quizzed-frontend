/* global test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import QuizPage from './QuizPage';

test('renders QuizPage', () => {
  render(<MemoryRouter><QuizPage /></MemoryRouter>);
  const title = screen.getByText(/quiz/i);
  expect(title).toBeInTheDocument();

  const button = screen.getByText(/next/i);
  expect(button).toBeInTheDocument();
});
