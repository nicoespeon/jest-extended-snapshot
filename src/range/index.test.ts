import { range } from "./";

it("should generate an array filled with numbers from start to end, included", () => {
  expect(range(2, 10)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

it("should generate an array with a single number if start equals end", () => {
  expect(range(2, 2)).toEqual([2]);
});

it("should generate an empty array if start is greater than end", () => {
  expect(range(2, 1)).toEqual([]);
});

it("should consider start to be 0 if only end is provided", () => {
  expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
