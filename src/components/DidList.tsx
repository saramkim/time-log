function DidList(standard: number): string[] {
  const LSKeys: string[] = Object.keys(window.localStorage).sort().reverse();
  const dayWeek = LSKeys.slice(standard, standard + 7);
  const LSDataKeys = dayWeek.map((LSDate) => {
    const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
    // object를 value 기준으로 정렬
    // const sortedData = Object.keys(logData)
    //   .sort((a, b) => logData[b] - logData[a])
    //   .reduce(
    //     (sortedObj, key) => ({
    //       ...sortedObj,
    //       [key]: logData[key],
    //     }),
    //     {}
    //   );
    // return Object.keys(sortedData);
    return Object.keys(logData);
  });
  const LSDataKeysWhole: string[] = LSDataKeys.reduce(
    (pre: string[], cur: string[]) => pre.concat(cur),
    []
  );
  const set = new Set(LSDataKeysWhole);

  return [...set];
}

export default DidList;
