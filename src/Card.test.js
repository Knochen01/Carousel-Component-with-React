import React from "react";
import { render } from "@testing-library/react";
import Card from './Card';

// SmokeTest
test ("should render", () => {
    render(<Card />)
})

// SnapshotTest
test ('should match Snapshot', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
})