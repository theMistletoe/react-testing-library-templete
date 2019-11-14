import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

afterEach(cleanup);

describe("App", () => {
  it("displays Hello", () => {
    const { getByText } = render(<App />);
    expect(getByText("Hello")).toBeInTheDocument();
  });
});
