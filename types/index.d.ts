/// <reference types="jest" />

declare namespace jest {
  interface Matchers<R> {
    /**
     * Use `.toVerifyAllCombinations` to make a snapshot of all `args` combinations.
     * @param {...*} args List of arguments
     *
     * @example
     *     expect(myFunction).toVerifyAllCombinations([1, 2], ["a", "b"])
     *     // Will test following combinations:
     *     //   - myFunction(1, "a")
     *     //   - myFunction(2, "a")
     *     //   - myFunction(1, "b")
     *     //   - myFunction(2, "b")
     *     //
     *     // And make a snapshot of combined results.
     */
    toVerifyAllCombinations(...args: any[][]): R;
  }
}
