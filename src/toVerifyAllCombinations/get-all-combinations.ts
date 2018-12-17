export function getAllCombinations(paramsList: any[][] = []): any[][] {
  if (paramsList.length === 0) {
    return [];
  }

  const [firstParams, ...rest] = paramsList;
  if (rest.length === 0) {
    return firstParams.map((param: any) => [param]);
  }

  const combinations: any[] = [];

  getAllCombinations(rest).forEach((restCombination: any) => {
    firstParams.forEach((param: any) => {
      combinations.push([param].concat(restCombination));
    });
  });

  return combinations;
}
