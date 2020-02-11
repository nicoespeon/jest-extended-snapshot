function range(startOrEnd: number, end?: number): number[] {
  let start = 0;

  if (typeof end === "number") {
    start = startOrEnd;
  } else {
    end = startOrEnd;
  }

  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

export { range };
