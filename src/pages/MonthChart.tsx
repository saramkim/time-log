import { useEffect, useState } from 'react';

import BarChart from 'components/MonthBarChart';

import 'css/MonthChart.css';

function MonthChart() {
  const [data, setData] = useState('');
  const [dayStart, setDayStart] = useState('');
  const [dayEnd, setDayEnd] = useState('');
  const [standard, setStandard] = useState(0);

  const LSKeys: any = Object.keys(window.localStorage).sort().reverse();

  useEffect(() => {
    const dayMonth = LSKeys.slice(standard, standard + 30);
    setDayStart(dayMonth[0]);
    setDayEnd(dayMonth[29]);

    const LSData: any = dayMonth.reverse().map(GetData);
    setData(LSData);
  }, [standard]);

  return (
    <div className='month-pg'>
      <div className='month-chart'>
        <BarChart data={data} />
      </div>
    </div>
  );
}

function GetData(LSDate: string) {
  const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
  const day = new Date(LSDate);
  return { 코딩: logData['코딩'], date: LSDate.slice(8, 10) };
}

export default MonthChart;
