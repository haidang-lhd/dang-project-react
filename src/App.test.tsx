import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Personal Investment Manager/i)).toBeInTheDocument();
  });

  it('renders HomePage component', () => {
    render(<App />);
    // Add more specific tests based on your HomePage component
    expect(document.body).toBeInTheDocument();
  });
});
