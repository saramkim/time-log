import CalChart from 'components/CalChart';

import 'css/YearChart.css';

function YearChart() {
  const LSKeys: any = Object.keys(window.localStorage);

  const data = LSKeys.map((LSDate: any) => {
    const logData = JSON.parse(localStorage.getItem(LSDate) || '{}');
    const logValue = logData['코딩'];
    return { day: LSDate, value: logValue };
  });

  return (
    <div className='year-pg'>
      <CalChart data={data} />
    </div>
  );
}

export default YearChart;
