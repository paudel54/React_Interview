// we are testing react component so we need it!
import React from 'react';
// fireEvent for testing test events. 
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test("Initial value of counter should be 0", () => {
    render(<Counter />);
    // Implemented getByTestId() to test with data-testid
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl).toBeInTheDocument();
})

test("On click, it should increment counter by 1", () => {
    render(<Counter />);
    const btnEl = screen.getByTestId("btn");
    const counterEl = screen.getByTestId("cnt");
    expect(counterEl.textContent).toBe("0");
    fireEvent.click(btnEl);
    expect(counterEl.textContent).toBe("1");
})

//using getByText() you dont need to worry the content.
//textContent will give us value fo content
