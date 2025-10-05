import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { describe, it, expect } from 'vitest';

describe('Navbar', () => {
  it('renders Navbar component', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    // Check that the main navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Talks')).toBeInTheDocument();
    expect(screen.getByText('Submit Talk')).toBeInTheDocument();
    expect(screen.getByText('Conference Next')).toBeInTheDocument();
  });
});