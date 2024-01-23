import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("Should load Contact Us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});
