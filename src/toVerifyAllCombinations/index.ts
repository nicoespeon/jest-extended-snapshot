// @ts-ignore - Didn't found official jest-snapshot types
import { toMatchSnapshot } from "jest-snapshot";

import { getAllCombinations } from "./get-all-combinations";

type TestedFunction = (...fnArgs: any) => string;

export default {
  toVerifyAllCombinations(fn: TestedFunction, ...args: any[][]) {
    const snapshot: { [k: string]: any } = {};

    getAllCombinations(args).forEach((combination) => {
      snapshot[combination.join(",")] = fn(...combination);
    });

    return toMatchSnapshot.call(this, snapshot);
  },
};
