# Changelog

## [v1.1.4](https://github.com/nicoespeon/jest-extended-snapshot/compare/v1.1.2...v1.1.4) (2021-10-09)

Update dependencies & declare where the types are explicitly. Thanks [@AmedeeVanGasse](https://twitter.com/AmedeeVanGasse) for raising it up!

## [v1.1.2](https://github.com/nicoespeon/jest-extended-snapshot/compare/v1.1.1...v1.1.2) (2020-08-26)

Add simpler setup instructions for Jest 24+, thanks to @FredericEspiau.

## [v1.1.1](https://github.com/nicoespeon/jest-extended-snapshot/compare/v1.1.0...v1.1.1) (2020-05-14)

Loosen peer dependency so it works with Jest versions above 23.

## [v1.1.0](https://github.com/nicoespeon/jest-extended-snapshot/compare/v1.0.1...v1.1.0) (2020-02-11)

Add `range()` helper to generate range of numbers:

```ts
// Before
expect(myFunction).toVerifyAllCombinations(
  [-1, 0, 1, 2, 3, 4],
  ["random", "foo"],
);

// 🚀 Now
import { range } from "jest-extended-snapshot";

expect(myFunction).toVerifyAllCombinations(range(-1, 4), ["random", "foo"]);
```

## [v1.0.1](https://github.com/nicoespeon/jest-extended-snapshot/compare/v1.0.0...v1.0.1) (2020-01-27)

Few security upgrades

## [v1.0.0](https://github.com/nicoespeon/jest-extended-snapshot/compare/c0b1d7c794909c8f7d58f8b2944084918f51f392...v1.0.0) (2018-12-17)

First stable release.

### Added

- First matcher `.toVerifyAllCombinations([args])`. It tests all combinations of given parameters to the function under test, and match against snapshot.
