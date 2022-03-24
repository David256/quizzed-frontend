/* global test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders HomePage', () => {
  render(<HomePage />);
  const title = screen.getByText(/welcome to the trivia challenge/i);
  expect(title).toBeInTheDocument();

  const secondText = screen.getByText(/you will be presented with 10 true or false question/i);
  expect(secondText).toBeInTheDocument();

  const thirdText = screen.getByText(/can you score 100%/i);
  expect(thirdText).toBeInTheDocument();

  const button = screen.getByText(/begin/i);
  expect(button).toBeInTheDocument();
});
