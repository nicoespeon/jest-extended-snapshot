// @ts-ignore - Didn't found official jest-snapshot types
import { toMatchSnapshot } from "jest-snapshot";

import { getAllCombinations } from "./get-all-combinations";

export default {
  toVerifyAllCombinations(fn: Function, ...args: any[][]) {
    const snapshot: { [k: string]: any } = {};

    getAllCombinations(args).forEach((combination) => {
      snapshot[combination.join(",")] = fn(...combination);
    });

    return toMatchSnapshot.call(this, snapshot);
  },
};
