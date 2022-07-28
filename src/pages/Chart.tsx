import { useEffect, useState } from 'react';

import MyResponsiveBar from 'components/BarChart';
import Today from 'components/Today';

import 'css/Chart.css';

function Chart() {
  const [date, setDate] = useState(Today());
  const LSItem = JSON.parse(localStorage.getItem(date) || '{}');
  const [data, setData] = useState('');

  // BarChart의 keys값이 log작성한대로 자동 추가되게 구현하기
  // const LSKeys: any = Object.keys(window.localStorage);
  // const LSDataKeys: any = LSKeys.sort().map((e: string, i: number) => {
  //   const logData = JSON.parse(localStorage.getItem(e) || '{}');
  //   return Object.keys(logData);
  // });
  // console.log(LSDataKeys);

  useEffect(() => {
    const LSKeys: any = Object.keys(window.localStorage);
    const LSData: any = LSKeys.sort().map(GetData);
    setData(LSData);
  }, []);

  return (
    <div className='chart-wrapper'>
      <MyResponsiveBar data={data} />
    </div>
  );
}

function GetData(e: string, i: number) {
  const logData = JSON.parse(localStorage.getItem(e) || '{}');
  return Object.defineProperty(logData, 'date', {
    value: e.slice(5, 10),
    enumerable: true,
  });
}

export default Chart;
