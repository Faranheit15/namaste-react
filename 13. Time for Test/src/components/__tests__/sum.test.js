import { sum } from "../sum";

test("This is a sum function that calculates the sum of two numbers", () => {
  const result = sum(1, 2);

  //Assertion
  expect(result).toBe(3);
});
