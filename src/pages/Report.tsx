import { useEffect, useState } from 'react';

import PieChart from 'components/PieChart';

// import data from 'components/TimeData';
import 'css/Report.css';

function Report() {
  const LSItem = JSON.parse(localStorage.getItem('공부') || '{}');
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
      {/* <div className='pie-chart'> */}
      <PieChart data={data} />
      {/* </div> */}

      {/* <DidList /> */}
    </div>
  );
}

// function DidList(): any {
//   const LSItem = JSON.parse(localStorage.getItem('공부') || '{}');
//   return Object.keys(LSItem).map((e: string, i: number) => {
//     return (
//       // key값으로 고유한 id값 만들기
//       // eslint-disable-next-line react/no-array-index-key
//       <div key={i}>
//         <div className='did-list'>
//           {e} : {LSItem[e]}
//         </div>
//       </div>
//     );
//   });
// }

export default Report;
