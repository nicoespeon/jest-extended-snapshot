import matcher from "./";

expect.extend(matcher);

// This would be an existing function without tests.
// It has some twisted logic… but it works.
function myFunction(aNumber: number, aString: string): string {
  if (aNumber > 0) {
    return `${aString} #${aNumber}`;
  }

  if (aString === "foo") {
    return `${aNumber} bar`;
  }

  return "This is twisted…";
}

// Following test verifies all combinations of arguments
// to create a snapshot of function behaviour.
it("should continue working as before", () => {
  expect(myFunction).toVerifyAllCombinations([1, -1], ["random", "foo"]);
});
