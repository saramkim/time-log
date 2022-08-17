import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import CalChart from 'components/YearCalChart';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function YearChart() {
  const focus = useSelector((state: RootState) => state.focus);
  const [thing, setThing] = useState(focus);

  const LSKeys: string[] = Object.keys(window.localStorage);

  const filterdDate = LSKeys.filter((LSDate: string) => {
    const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
    const logValue = logData[thing];
    return logValue !== undefined && logValue !== 0;
  });

  const data = filterdDate.map((date: string) => {
    const logData = JSON.parse(localStorage.getItem(date) || '{}');
    const logValue = logData[thing];

    return { day: date, value: logValue };
  });

  const setCurChart: Dispatch<SetStateAction<string>> = useOutletContext();
  useEffect(() => {
    setCurChart('year');
  });

  return (
    <div className='chart-wrapper'>
      <input
        className='standard-thing'
        placeholder={thing}
        onChange={(e) => {
          setThing(e.target.value);
        }}
      />

      <CalChart data={data} />
    </div>
  );
}

export default YearChart;
