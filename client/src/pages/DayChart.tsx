import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import PieChart from 'components/DayPieChart';
import getToday from 'hooks/getToday';

import { DefaultRawDatum } from '@nivo/pie';

import 'css/DayChart.css';

function DayChart() {
  const today = getToday();
  const [date, setDate] = useState(today);
  const [data, setData] = useState<DefaultRawDatum[]>([]);
  const LSItem = JSON.parse(localStorage.getItem(date) || '{}');
  const timeList: number[] = Object.values(LSItem);
  const totalTime: number = timeList.reduce((p, c) => p + c, 0);

  const setCurChart: Dispatch<SetStateAction<string>> = useOutletContext();
  useEffect(() => {
    setCurChart('day');
  });

  useEffect(() => {
    const filterdData = Object.keys(LSItem).filter((LSDataKey) => {
      return LSItem[LSDataKey] !== 0;
    });

    const LSData: DefaultRawDatum[] = filterdData.map((e) => ({
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
        <DateList today={today} />
      </select>

      <div className='day-chart'>
        <PieChart data={data} />
        <div className='day-chart__center'>{Math.floor(totalTime / 60)}</div>
      </div>
    </div>
  );
}

function DateList({ today }: { today: string }) {
  const LSDateList = Object.keys(window.localStorage).sort().reverse();
  const dateList = LSDateList.map((key) => {
    const LSdata = localStorage.getItem(key);
    if (LSdata !== '' || key === today) {
      return <option key={key}>{key}</option>;
    }
    return false;
  });

  return <> {dateList} </>;
}

export default DayChart;
