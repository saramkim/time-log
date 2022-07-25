import { useEffect, useState } from 'react';

import PieChart from 'components/PieChart';
import Today from 'components/Today';

import 'css/Report.css';

function Report() {
  const date = Today();
  const LSItem = JSON.parse(localStorage.getItem(date) || '{}');
  const [data, setData] = useState('');

  useEffect(() => {
    const data: any = Object.keys(LSItem).map((e: string) => ({
      id: e,
      label: e,
      value: LSItem[e],
    }));
    setData(data);
  }, []);

  return (
    <div className='report-wrapper'>
      <PieChart data={data} />
    </div>
  );
}

// }

export default Report;
