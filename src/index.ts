import toVerifyAllCombinations from "./toVerifyAllCombinations";

declare namespace NodeJS {
  interface Global {
    expect?: jest.Expect;
  }
}

declare const global: NodeJS.Global;

const jestExpect = global.expect;

if (jestExpect !== undefined) {
  jestExpect.extend(toVerifyAllCombinations);
} else {
  // tslint:disable-next-line:no-console - This is intentional.
  console.error(
    [
      "Unable to find Jest's global expect.",
      "Please check you have added jest-extended-snapshot correctly to your jest configuration.",
      "See https://github.com/nicoespeon/jest-extended-snapshot#setup for help.",
    ].join("\n"),
  );
}

export { range } from "./range";
