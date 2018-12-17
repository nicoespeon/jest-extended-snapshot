import { getAllCombinations } from "./get-all-combinations";

describe("getAllCombinations", () => {
  it("should return an empty array if there is no param", () => {
    const params: any[][] = [];

    const combinations = getAllCombinations(params);

    expect(combinations).toEqual([]);
  });

  it("should spread param values if there is only one param", () => {
    const params = [[1, 2, 3]];

    const combinations = getAllCombinations(params);

    expect(combinations).toEqual([[1], [2], [3]]);
  });

  it("should combine 2 params with 1 value", () => {
    const params = [[1], ["a"]];

    const combinations = getAllCombinations(params);

    expect(combinations).toEqual([[1, "a"]]);
  });

  it("should combine 2 params with 2 values", () => {
    const params = [[1, 2], ["a", "b"]];

    const combinations = getAllCombinations(params);

    expect(combinations).toEqual([[1, "a"], [2, "a"], [1, "b"], [2, "b"]]);
  });

  it("should combine 3 params with 2 values", () => {
    const params = [[1, 2], ["a", "b"], [true, false]];

    const combinations = getAllCombinations(params);

    expect(combinations).toEqual([
      [1, "a", true],
      [2, "a", true],
      [1, "b", true],
      [2, "b", true],
      [1, "a", false],
      [2, "a", false],
      [1, "b", false],
      [2, "b", false],
    ]);
  });

  it("should combine 3 params with variable values", () => {
    const params = [[1, 2, 3], ["a"], [true, false]];

    const combinations = getAllCombinations(params);

    expect(combinations).toEqual([
      [1, "a", true],
      [2, "a", true],
      [3, "a", true],
      [1, "a", false],
      [2, "a", false],
      [3, "a", false],
    ]);
  });
});
