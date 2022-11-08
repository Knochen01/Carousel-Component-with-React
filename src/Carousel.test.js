import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Carousel from './Carousel';

// SmokeTest
it('Should render', () => {
    render(<Carousel />)
})

// SnapshotTest
it ("should match Snapshot", () => {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot()
})

// Test Left arrow
test ('Left arrow is working properly', () => {
    const { getByTestId, queryByAltText} = render(<Carousel />)

    const leftArrow = getByTestId("left-arrow");
    const rightArrow = getByTestId("right-arrow");
    // move to the right
    fireEvent.click(rightArrow);

    // move to the left expecting first picture to be shown
    fireEvent.click(leftArrow)
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
})

// Is left arrow missing on first
test("Left arrow is missing on first image", () => {
    const { getByTestId } = render(<Carousel />)

    const leftArrow = getByTestId("left-arrow")
    const rightArrow = getByTestId("right-arrow")
    
    expect(leftArrow).toHaveClass("Carousel-hidden")
// Move forward once
    fireEvent.click(rightArrow)
// Move forward to last 
    fireEvent.click(rightArrow)
// Is right arrow missing on last
    expect(rightArrow).toHaveClass("Carousel-hidden")
    expect(leftArrow).not.toHaveClass("Carousel-hidden")
})