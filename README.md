# 👹 jest-extended-snapshot

Additional Jest matchers for snapshot testing.

_Requires Jest version >= 23._

---

[![version](https://img.shields.io/npm/v/jest-extended-snapshot.svg?logo=npm)](https://www.npmjs.com/package/jest-extended-snapshot)
[![Build Status](https://travis-ci.org/nicoespeon/jest-extended-snapshot.svg?branch=master)](https://travis-ci.org/nicoespeon/jest-extended-snapshot)
[![Changelog](https://img.shields.io/badge/%F0%9F%93%94-changelog-CD9523.svg)](https://github.com/nicoespeon/jest-extended-snapshot/blob/master/CHANGELOG.md)

## Why?

If you find yourself in a scenario where you want to add tests after code has been written, you might want to use Jest snapshots.

A typical scenario is working with legacy code: it has no test, but you need to change/fix it. You should set up a test harness first, to ensure there would be no regression. Jest snapshots make this job easier.

This lib adds convenient matchers to work in such scenario.

### Approval testing with Jest snapshots

Consider the previous example: you don’t know what a piece of code precisely does, but you don't want to break existing behavior. One approach to use in this situation is called "Approval testing".

It can get you test coverage quickly, without having to understand the code.

> Unit testing asserts can be difficult to use. Approval tests simplify this by taking a snapshot of the results, and confirming that they have not changed.

Further information: http://approvaltests.com/

## Installation

With npm:

```
npm install --save-dev jest-extended-snapshot
```

With yarn:

```
yarn add -D jest-extended-snapshot
```

## Set up

Add `jest-extended-snapshot` to your Jest `setupTestFrameworkScriptFile` configuration. [See Jest website](https://jestjs.io/docs/en/configuration.html#setuptestframeworkscriptfile-string) for more information.

```json
"jest": {
  "setupTestFrameworkScriptFile": "jest-extended-snapshot"
}
```

If you are already using another test framework, like [jest-extended](https://github.com/jest-community/jest-extended), you should create a test setup file to require each of the frameworks you are using.

For example:

```js
// ./test-setup.js
require("jest-extended-snapshot");
require("any other test framework libraries you are using");
```

Then in your Jest config:

```json
"jest": {
  "setupTestFrameworkScriptFile": "./test-setup.js"
}
```

## List of additional matchers (API)

### `.toVerifyAllCombinations([args])`

Test all combinations of given parameters to the function under test, and match against snapshot.

Usage:

```js
expect(myFunction).toVerifyAllCombinations([args]);
```

#### Example

```js
function myFunction(aNumber, aString) {
  if (aNumber > 0) {
    return `${aString} #${aNumber}`;
  }

  if (aString === "foo") {
    return `${aNumber} bar`;
  }

  return "This is twisted…";
}

it("should continue working as before", () => {
  expect(myFunction).toVerifyAllCombinations([1, -1], ["random", "foo"]);
});
```

Will produce following snapshot:

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`should continue working as before 1`] = `
Object {
  "-1,foo": "-1 bar",
  "-1,random": "This is twisted…",
  "1,foo": "foo #1",
  "1,random": "random #1",
}
`;
```

#### How to use best

1. Determine the inputs you could combine to test your code
1. Determine the output you could make a snapshot from
1. Use test coverage to determine which parts are not covered yet
1. Augment your inputs combination until you cover all of the code
1. Perform little mutations in your covered code to check the quality of your snapshot
1. Augment your inputs combination until there is no way you can add mutations without the test failing
1. In the end, you got a snapshot of what your code does. And you can start refactoring with confidence

👌 I recommend you watch this video of Emily Bache, applying this over the Gilded Rose refactoring kata (in Java): https://youtu.be/zyM2Ep28ED8
