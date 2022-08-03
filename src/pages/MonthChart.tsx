import { useEffect, useState } from 'react';

import BarChart from 'components/MonthBarChart';
import Today from 'components/Today';

import 'css/MonthChart.css';

function MonthChart() {
  const thisMonth = Today().slice(0, 7);
  const [data, setData] = useState('');
  const [standard, setStandard] = useState(thisMonth);

  const LSKeys: string[] = Object.keys(window.localStorage).sort().reverse();

  useEffect(() => {
    const dayMonth = LSKeys.filter((LSDate: string) => LSDate.includes(standard));

    const LSData: any = dayMonth.reverse().map(GetData);
    setData(LSData);
  }, [standard]);

  return (
    <div className='month-pg'>
      <select
        onFocus={(e) => {
          if (e.target.childElementCount >= 7) {
            e.target.size = 7;
          } else {
            e.target.size = e.target.childElementCount;
          }
        }}
        onBlur={(e) => {
          e.target.size = 1;
        }}
        onChange={(e) => {
          e.target.blur();
          setStandard(e.target.value);
        }}
        name='month'
        value={standard}
        className='month-selector'
      >
        <DateList LSKeys={LSKeys} />
      </select>
      <div className='month-chart'>
        <BarChart data={data} />
      </div>
    </div>
  );
}

function GetData(LSDate: string) {
  const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
  if (logData['코딩']) {
    return { 코딩: logData['코딩'], date: LSDate.slice(8, 10) };
  }
  return { 코딩: 0, date: LSDate.slice(8, 10) };
}

function DateList({ LSKeys }: { LSKeys: any }) {
  const aa = LSKeys.map((e: string) => e.slice(0, 7));
  const set = new Set(aa);
  const monthList = [...set] as string[];

  return (
    <>
      {monthList.map((e: string) => {
        return <option key={e}>{e}</option>;
      })}
    </>
  );
}

export default MonthChart;
