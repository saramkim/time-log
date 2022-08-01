import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import 'css/Chart.css';

function Chart() {
  const navigate = useNavigate();
  const [curChart, setCurChart] = useState('pie');

  let pieClicked = '';
  let barClicked = '';
  let rangeClicked = '';
  switch (curChart) {
    case 'pie':
      pieClicked = 'chart-btn--clicked';
      break;
    case 'bar':
      barClicked = 'chart-btn--clicked';
      break;
    case 'range':
      rangeClicked = 'chart-btn--clicked';
      break;
    default:
  }

  return (
    <div className='chart-pg'>
      <div className='chart-btns'>
        <button
          className={`chart-btn ${pieClicked}`}
          type='button'
          onClick={() => {
            navigate('pie');
            setCurChart('pie');
          }}
        >
          Pie
        </button>
        <button
          className={`chart-btn ${barClicked}`}
          type='button'
          onClick={() => {
            navigate('bar');
            setCurChart('bar');
          }}
        >
          Bar
        </button>
        <button
          className={`chart-btn ${rangeClicked} `}
          type='button'
          onClick={() => {
            navigate('range');
            setCurChart('range');
          }}
        >
          Range
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Chart;
