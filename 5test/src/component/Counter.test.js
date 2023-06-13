// we are testing react component so we need it!
import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test("Initial value of counter should be 0", () => {
    render(<Counter />);
    // Implemented getByTestId to test with data-testid
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).toBeInTheDocument();
})