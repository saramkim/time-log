import { useSelector } from 'react-redux';
import { RootState } from 'store';

function DidList(standard: number) {
  const focus = useSelector((state: RootState) => state.focus);
  const LSDateList = Object.keys(window.localStorage).sort().reverse();
  const dayWeek = LSDateList.slice(standard, standard + 7);

  const LSDataKey = dayWeek.map((LSDate) => {
    const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
    const logDataKeyList = Object.keys(logData);
    const focusIndex = logDataKeyList.findIndex((key) => key === focus);

    if (focusIndex !== -1) {
      logDataKeyList.slice(focusIndex, 1);
      logDataKeyList.unshift(focus);
    }
    return logDataKeyList;
  });

  const LSDataKeyList = LSDataKey.reduce((pre: string[], cur: string[]) => pre.concat(cur), []);
  const set = new Set(LSDataKeyList);

  return [...set];
}

export default DidList;
