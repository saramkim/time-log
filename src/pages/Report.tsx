import { useEffect, useState } from 'react';

import PieChart from 'components/PieChart';
import Today from 'components/Today';

import 'css/Report.css';

function Report() {
  const [date, setDate] = useState(Today());
  const LSItem = JSON.parse(localStorage.getItem(date) || '{}');
  const [data, setData] = useState('');

  useEffect(() => {
    const LSData: any = Object.keys(LSItem).map((e: string) => ({
      id: e,
      label: e,
      value: LSItem[e],
    }));
    setData(LSData);
  }, [date]);

  return (
    <div className='report-wrapper'>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      > */}
      <select
        name='date'
        className='date-selector'
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      >
        <DateList />
      </select>
      {/* <button type='submit'>선택</button> */}
      {/* </form> */}

      {/* <input type='date' /> */}
      {/* <input type='week' /> */}
      <div className='pie-chart'>
        <PieChart data={data} />
      </div>
    </div>
  );
}

function DateList() {
  const LSKeys: any = Object.keys(window.localStorage);

  return LSKeys.sort()
    .reverse()
    .map((e: string) => {
      return <option key={e}>{e}</option>;
    });
}

export default Report;
