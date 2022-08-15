import { useEffect, useState } from 'react';

import BarChart from 'components/WeekBarChart';
import getToday from 'hooks/getToday';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { BarDatum } from '@nivo/bar';

import 'css/WeekChart.css';

function WeekChart() {
  const [data, setData] = useState<BarDatum[]>([]);
  const [dayStart, setDayStart] = useState('');
  const [dayEnd, setDayEnd] = useState('');

  const LSKeyList = Object.keys(window.localStorage).sort().reverse();
  const today = getToday();
  const todayIndex = LSKeyList.findIndex((key) => key === today);
  const [standard, setStandard] = useState(todayIndex);

  useEffect(() => {
    const dayWeek = LSKeyList.slice(standard, standard + 7);
    setDayStart(dayWeek[0]);
    setDayEnd(dayWeek[6]);

    const LSData: BarDatum[] = dayWeek.reverse().map(getData);
    setData(LSData);
  }, [standard]);

  return (
    <div className='chart-wrapper'>
      <div className='week-selector'>
        <div className='week-selector__date'>
          {dayStart}
          <br />
          ~<br />
          {dayEnd}
        </div>
        <div className='week-selector__btns'>
          <FaAngleDoubleLeft
            onClick={() => {
              if (standard < LSKeyList.length - 13) setStandard(standard + 7);
            }}
          />
          <FaAngleLeft
            onClick={() => {
              if (standard < LSKeyList.length - 7) setStandard(standard + 1);
            }}
          />
          <FaAngleRight
            onClick={() => {
              if (standard > todayIndex) setStandard(standard - 1);
            }}
          />
          <FaAngleDoubleRight
            onClick={() => {
              if (standard > todayIndex + 6) setStandard(standard - 7);
            }}
          />
        </div>
      </div>
      <div className='week-chart'>
        <BarChart data={data} standard={standard} />
      </div>
    </div>
  );
}

function getData(LSDate: string) {
  const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
  const day = new Date(LSDate);
  const options: { weekday: 'long' } = { weekday: 'long' };
  const weekDay = new Intl.DateTimeFormat('ko-KR', options).format(day);

  return Object.defineProperty(logData, 'date', {
    value: `${LSDate.slice(5, 10)}(${weekDay.slice(0, 1)})`,
    enumerable: true,
  });
}

export default WeekChart;
