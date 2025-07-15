import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Check for unique elements that confirm both Header and HomePage are rendered
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
    expect(screen.getByText(/🧠 Goals/i)).toBeInTheDocument();
  });

  it('renders HomePage component', () => {
    render(<App />);
    // Check for HomePage specific content
    expect(screen.getByText(/Record investment transactions/i)).toBeInTheDocument();
    expect(screen.getByText(/Track portfolio value/i)).toBeInTheDocument();
  });
});
