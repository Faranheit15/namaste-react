import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page Test Cases", () => {
  test("Should load Contact Us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside Contact Us component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });
  test("Should load input name inside Contact Us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });
  test("Should load input message inside Contact Us component", () => {
    render(<Contact />);
    const inputMessage = screen.getByPlaceholderText("Message");

    //Assertion
    expect(inputMessage).toBeInTheDocument();
  });
  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes).toHaveLength(2);
  });
});
