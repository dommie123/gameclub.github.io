import { render, screen } from '@testing-library/react';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('render header on screen without crashing', () => {
  render(<App />);
  const header = screen.getByText(/Game Club Official Website/i);
  expect(header).toBeInTheDocument();
})
