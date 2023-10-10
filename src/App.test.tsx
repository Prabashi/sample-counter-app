import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// describe("Loading page", () => {
//   test("renders the initial count value", () => {
//     render(<App />);
//     const linkElement = screen.getByTestId("count-text");
//     expect(linkElement).toBeInTheDocument();
//   });

//   test("button renders", () => {
//     render(<App />);
//     const buttonElement = screen.getByTestId("count-button");
//     expect(buttonElement).toBeInTheDocument();
//   });

//   test("button click increments the counter", () => {
//     render(<App />);
//     const buttonElement = screen.getByTestId("count-button");
//     const onClick = jest.fn();

//     fireEvent.click(buttonElement);
//     expect(onClick).toHaveBeenCalled();
//     // expect(buttonElement).toBeInTheDocument();
//   });
// });

describe("Counter Component in App", () => {
  test("shows the counter value text", () => {
    const { getByTestId } = render(<App />);
    const textElement = getByTestId("count-text");
    expect(textElement).toBeInTheDocument();
  });

  test("shows the initial counter value correctly", () => {
    const { getByTestId } = render(<App />);
    const textElement = getByTestId("count-text");
    // expect(textElement).toHaveTextContent(/Count is 0/i);
    expect(textElement.textContent).toBe("Count is 0");
  });

  test("increments count by 1 when the button is clicked", () => {
    const { getByTestId } = render(<App />);
    const buttonElement = getByTestId("count-button");
    const textElement = getByTestId("count-text");

    fireEvent.click(buttonElement);
    expect(textElement.textContent).toBe("Count is 1");
  });

  test("increments count based on the number of clicks", () => {
    const { getByTestId } = render(<App />);
    const buttonElement = getByTestId("count-button");
    const textElement = getByTestId("count-text");

    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);

    expect(textElement.textContent).toBe("Count is 3");
  });
});
