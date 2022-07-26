import { useEffect, useState } from 'react';

import PieChart from 'components/PieChart';
import Today from 'components/Today';

import 'css/Report.css';

function Report() {
  const [date, setDate] = useState(Today());
  const LSItem = JSON.parse(localStorage.getItem(date) || '{}');
  const [data, setData] = useState('');

  useEffect(() => {
    const data: any = Object.keys(LSItem).map((e: string) => ({
      id: e,
      label: e,
      value: LSItem[e],
    }));
    setData(data);
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
      <PieChart data={data} />
    </div>
  );
}

function DateList() {
  const LSKeys: any = Object.keys(window.localStorage);

  return LSKeys.reverse().map((e: string) => {
    return <option>{e}</option>;
  });
}

export default Report;
