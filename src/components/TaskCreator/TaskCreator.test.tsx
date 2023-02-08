import { render, screen } from "@testing-library/react";
import TaskCreator from "./TaskCreator";

describe("Given an input and a button", () => {
  test("When the component is rendered, then show an input and a button", () => {
    render(<TaskCreator OnUpdate={() => {}} />);
    const inputElement = screen.getByTestId("task-input");
    const buttonElement = screen.getByText("Send");
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
