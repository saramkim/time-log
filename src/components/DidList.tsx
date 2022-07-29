function DidList(standard: number): string[] {
  const LSKeys: string[] = Object.keys(window.localStorage);
  const LSDataKeys: any = LSKeys.sort()
    .reverse()
    .slice(standard, standard + 7)
    .map((e: string) => {
      const logData = JSON.parse(localStorage.getItem(e) || '{}');
      return Object.keys(logData);
    });
  const LSDataKeysWhole: string[] = LSDataKeys.reduce((pre: any, cur: any) => pre.concat(cur), []);
  const set = new Set(LSDataKeysWhole);

  return [...set] as string[];
}

export default DidList;
