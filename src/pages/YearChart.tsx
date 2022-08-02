import { useState } from 'react';

import CalChart from 'components/CalChart';

import 'css/YearChart.css';

function YearChart() {
  const [standard, setStandard] = useState('코딩');

  const LSKeys: string[] = Object.keys(window.localStorage);

  const filterdDate = LSKeys.filter((LSDate: string) => {
    const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
    const logValue = logData[standard];
    return logValue !== undefined;
  });

  const data = filterdDate.map((date: string) => {
    const logData = JSON.parse(localStorage.getItem(date) || '{}');
    const logValue = logData[standard];

    return { day: date, value: logValue };
  });

  return (
    <div className='year-pg'>
      <input
        className='year-standard'
        placeholder={standard}
        onChange={(e) => {
          setStandard(e.target.value);
        }}
      />

      <CalChart data={data} />
    </div>
  );
}

export default YearChart;
