import { useEffect, useState } from 'react';

import MyResponsiveBar from 'components/BarChart';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import 'css/Chart.css';

function Chart() {
  const [data, setData] = useState('');
  const [dayStart, setDayStart] = useState('');
  const [dayEnd, setDayEnd] = useState('');
  const [standard, setStandard] = useState(0);

  useEffect(() => {
    const LSKeys: any = Object.keys(window.localStorage);
    const LSData: any = LSKeys.sort()
      .reverse()
      .slice(standard, standard + 7)
      .reverse()
      .map(GetData);
    setData(LSData);
    const aaa = LSKeys.sort()
      .reverse()
      .slice(standard, standard + 7);
    setDayStart(aaa[0]);
    setDayEnd(aaa[6]);
  }, [standard]);

  return (
    <div>
      <div className='week-selector'>
        <div className='week-selector__date'>
          {dayStart}
          <br />~ {dayEnd}
        </div>
        <div className='week-selector__btns'>
          {/* (오늘 이후) or (기록이 없는 날짜) 페이지 넘기기 안되게 */}
          <FaAngleDoubleLeft onClick={() => setStandard(standard + 7)} />
          <FaAngleLeft onClick={() => setStandard(standard + 1)} />
          <FaAngleRight onClick={() => setStandard(standard - 1)} />
          <FaAngleDoubleRight onClick={() => setStandard(standard - 7)} />
        </div>
      </div>
      <div className='chart-wrapper'>
        <MyResponsiveBar data={data} standard={standard} />
      </div>
    </div>
  );
}

function GetData(e: string) {
  const logData = JSON.parse(localStorage.getItem(e) || '{}');
  const day = new Date(e);
  const options: { weekday: 'long' } = { weekday: 'long' };
  const weekDay = new Intl.DateTimeFormat('ko-KR', options).format(day);

  return Object.defineProperty(logData, 'date', {
    value: `${e.slice(5, 10)}(${weekDay.slice(0, 1)})`,
    enumerable: true,
  });
}

export default Chart;
