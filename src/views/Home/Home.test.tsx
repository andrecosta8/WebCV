import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('Home', () => {
  it('renders home component with content', () => {
    render(<Home />);
    expect(screen.getByText('Thank you for being interested in knowing more about me...')).toBeInTheDocument();
  });
});