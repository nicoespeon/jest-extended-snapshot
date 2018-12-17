// @ts-ignore - Didn't found official jest-snapshot types
import { toMatchSnapshot } from "jest-snapshot";

import { getAllCombinations } from "./get-all-combinations";

type TestedFunction = (...fnArgs: any) => string;

declare global {
  namespace jest {
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
}

export default {
  toVerifyAllCombinations(fn: TestedFunction, ...args: any[][]) {
    const snapshot: { [k: string]: any } = {};

    getAllCombinations(args).forEach((combination) => {
      snapshot[combination.join(",")] = fn(...combination);
    });

    return toMatchSnapshot.call(this, snapshot);
  },
};
