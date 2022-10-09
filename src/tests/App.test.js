import { render, screen } from '@testing-library/react';
import App from './App';

test('Page contains Gone Fishing text', () => {
  render(<App />);
  const text = screen.getByText("Gone Fishing");
  expect(text).toBeInTheDocument();
});

test('Page contains starter boat', () => {
  render(<App />);
  const text = screen.getByText("Dilapidated Boat");
  expect(text).toBeInTheDocument();
});
