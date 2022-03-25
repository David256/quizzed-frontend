/* global test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PrefacePage from './PrefacePage';

test('renders PrefacePage', () => {
  render(<MemoryRouter><PrefacePage /></MemoryRouter>);
  const title = screen.getByText(/preface/i);
  expect(title).toBeInTheDocument();

  const quizName = screen.getByText(/quiz name/i);
  expect(quizName).toBeInTheDocument();

  const quizNameInput = screen.getByLabelText(/quiz-name/i);
  expect(quizNameInput).toBeInTheDocument();

  const emailTitle = screen.getByText(/your email/i);
  expect(emailTitle).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/user-email/i);
  expect(emailInput).toBeInTheDocument();

  const providerSettings = screen.getByRole('option', { name: 'provider-option' });
  expect(providerSettings).toBeInTheDocument();

  const select = screen.getByDisplayValue(/select a provider/i);
  expect(select).toBeInTheDocument();

  const button = screen.getByText(/next/i);
  expect(button).toBeInTheDocument();
});
