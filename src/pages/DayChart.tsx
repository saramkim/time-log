import { useEffect, useState } from 'react';

import PieChart from 'components/PieChart';
import Today from 'components/Today';

import 'css/DayChart.css';

function DayChart() {
  const [date, setDate] = useState(Today());
  const [data, setData] = useState({ id: 'string', label: 'string', value: 1 });
  const LSItem = JSON.parse(localStorage.getItem(date) || '{}');

  const timeArr: number[] = Object.values(LSItem);
  const totalTime: number = timeArr.reduce((p, c) => p + c, 0);

  useEffect(() => {
    const LSData: any = Object.keys(LSItem).map((e: string) => ({
      id: e,
      label: e,
      value: LSItem[e],
    }));
    setData(LSData);
  }, [date]);

  return (
    <div className='day-pg'>
      <select
        onFocus={(e) => {
          e.target.size = 7;
        }}
        onBlur={(e) => {
          e.target.size = 1;
        }}
        onChange={(e) => {
          e.target.blur();
          setDate(e.target.value);
        }}
        name='date'
        className='date-selector'
        value={date}
      >
        <DateList />
      </select>

      <div className='day-chart'>
        <PieChart data={data} />
        <div className='day-chart__center'>{totalTime}</div>
      </div>
    </div>
  );
}

function DateList() {
  const LSKeys: any = Object.keys(window.localStorage);

  return LSKeys.sort()
    .reverse()
    .map((e: string) => {
      return <option key={e}>{e}</option>;
    });
}

export default DayChart;
