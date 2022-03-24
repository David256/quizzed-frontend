/* global test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ResultPage from './ResultPage';

test('renders ResultPage', () => {
  const results = [
    {
      id: 'id-1',
      question: 'question 1?',
      answer: true,
    },
    {
      id: 'id-2',
      question: 'question 2?',
      answer: false,
    },
  ];
  render(<ResultPage results={results} />);
  const title = screen.getByText(/results/i);
  expect(title).toBeInTheDocument();

  const list = screen.getByLabelText('results');
  expect(list.children.length).toBe(2);
});
