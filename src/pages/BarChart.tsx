import { useEffect, useState } from 'react';

import BarChartComponent from 'components/BarChartComponent';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import 'css/BarChart.css';

function BarChart() {
  const [data, setData] = useState('');
  const [dayStart, setDayStart] = useState('');
  const [dayEnd, setDayEnd] = useState('');
  const [standard, setStandard] = useState(0);

  const LSKeys: any = Object.keys(window.localStorage).sort().reverse();

  useEffect(() => {
    const LSData: any = LSKeys.slice(standard, standard + 7)
      .reverse()
      .map(GetData);
    setData(LSData);

    const dayWeek = LSKeys.slice(standard, standard + 7);
    setDayStart(dayWeek[0]);
    setDayEnd(dayWeek[6]);
  }, [standard]);

  return (
    <div className='bar-pg'>
      <div className='week-selector'>
        <div className='week-selector__date'>
          {dayStart}
          <br />
          ~<br />
          {dayEnd}
        </div>
        <div className='week-selector__btns'>
          <FaAngleDoubleLeft onClick={() => setStandard(standard + 7)} />
          <FaAngleLeft onClick={() => setStandard(standard + 1)} />
          <FaAngleRight
            onClick={() => {
              if (standard > 0) setStandard(standard - 1);
            }}
          />
          <FaAngleDoubleRight
            onClick={() => {
              if (standard > 6) setStandard(standard - 7);
            }}
          />
        </div>
      </div>
      <div className='bar-chart'>
        <BarChartComponent data={data} standard={standard} />
      </div>
    </div>
  );
}

function GetData(LSDateKeys: string) {
  const logData = JSON.parse(localStorage.getItem(LSDateKeys) || '{}');
  const day = new Date(LSDateKeys);
  const options: { weekday: 'long' } = { weekday: 'long' };
  const weekDay = new Intl.DateTimeFormat('ko-KR', options).format(day);

  return Object.defineProperty(logData, 'date', {
    value: `${LSDateKeys.slice(5, 10)}(${weekDay.slice(0, 1)})`,
    enumerable: true,
  });
}

export default BarChart;
