import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {
  test('it renders', () => {
    render(<App />);
    expect(screen.getByText('Let\'s do some math!')).toBeInTheDocument();
  });
});
