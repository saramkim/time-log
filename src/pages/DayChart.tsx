import { useEffect, useState } from 'react';

import PieChart from 'components/PieChart';
import Today from 'hooks/getToday';

import { DefaultRawDatum } from '@nivo/pie';

import 'css/DayChart.css';

function DayChart() {
  const [date, setDate] = useState(Today());
  const [data, setData] = useState<DefaultRawDatum[]>([]);
  const LSItem = JSON.parse(localStorage.getItem(date) || '{}');

  const timeArr: number[] = Object.values(LSItem);
  const totalTime: number = timeArr.reduce((p, c) => p + c, 0);

  useEffect(() => {
    const filterdData = Object.keys(LSItem).filter((e) => {
      return LSItem[e] !== 0;
    });

    const LSData: DefaultRawDatum[] = filterdData.map((e: string) => ({
      id: e,
      label: e,
      value: LSItem[e],
    }));

    setData(LSData);
  }, [date]);

  return (
    <div className='chart-wrapper'>
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
        <div className='day-chart__center'>{(totalTime / 60).toFixed(1)}</div>
      </div>
    </div>
  );
}

function DateList() {
  const LSKeys = Object.keys(window.localStorage).sort().reverse();
  const dateList = LSKeys.map((v) => <option key={v}>{v}</option>);
  return <> {dateList} </>;
}

export default DayChart;
