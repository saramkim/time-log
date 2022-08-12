import { useEffect, useState } from 'react';

import BarChart from 'components/MonthBarChart';
import Today from 'hooks/getToday';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import { BarDatum } from '@nivo/bar';

import 'css/MonthChart.css';

function MonthChart() {
  const thisMonth = Today().slice(0, 7);
  const [data, setData] = useState<BarDatum[]>([]);
  const [standard, setStandard] = useState(thisMonth);
  const focus = useSelector((state: RootState) => state.focus);
  const [thing, setThing] = useState(focus);

  const LSKeys: string[] = Object.keys(window.localStorage).sort().reverse();

  useEffect(() => {
    const dayMonth = LSKeys.filter((LSDate: string) => LSDate.includes(standard));

    const LSData: BarDatum[] = dayMonth.reverse().map((LSDate: string) => {
      const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
      if (logData[thing]) {
        return { [thing]: logData[thing], date: LSDate.slice(8, 10) };
      }
      return { [thing]: 0, date: LSDate.slice(8, 10) };
    });
    setData(LSData);
  }, [standard, thing]);

  return (
    <div className='chart-wrapper'>
      <input
        className='standard-thing'
        placeholder={thing}
        onChange={(e) => {
          setThing(e.target.value);
        }}
      />

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
        <BarChart data={data} keys={thing} />
      </div>
    </div>
  );
}

function DateList({ LSKeys }: { LSKeys: string[] }) {
  const aa = LSKeys.map((v: string) => v.slice(0, 7));
  const set = new Set(aa);
  const monthLists = [...set];
  const monthList = monthLists.map((v: string) => {
    return <option key={v}>{v}</option>;
  });
  return <> {monthList} </>;
}

export default MonthChart;
