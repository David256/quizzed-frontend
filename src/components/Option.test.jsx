/* global test, expect */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Option from './Option';

test('renders Option', () => {
  const clickFalse = (isCorrect) => {
    expect(isCorrect).toBeFalsy();
  };

  const clickTrue = (isCorrect) => {
    expect(isCorrect).toBeTruthy();
  };

  const { rerender } = render(<Option isCorrect={false} onClick={clickFalse} />);
  const optionFalse = screen.getByText(/false/i);
  expect(optionFalse).toBeInTheDocument();
  expect(optionFalse).toHaveClass('notcorrect');

  fireEvent.click(optionFalse);
  fireEvent.keyDown(optionFalse, { key: 'n', code: 'KeyN' });
  fireEvent.keyDown(optionFalse, { key: 'N', code: 'KeyN' });

  rerender(<Option isCorrect onClick={clickTrue} />);
  const optionTrue = screen.getByText(/true/i);
  expect(optionTrue).toBeInTheDocument();
  expect(optionTrue).toHaveClass('correct');

  fireEvent.click(optionTrue);
  fireEvent.keyDown(optionTrue, { key: 'y', code: 'KeyY' });
  fireEvent.keyDown(optionTrue, { key: 'Y', code: 'KeyY' });
});
