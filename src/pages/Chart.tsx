import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import 'css/Chart.css';

function Chart() {
  const navigate = useNavigate();
  const [curChart, setCurChart] = useState('day');

  let dayClicked = '';
  let weekClicked = '';
  let monthClicked = '';
  let yearClicked = '';
  switch (curChart) {
    case 'day':
      dayClicked = 'chart-btn--clicked';
      break;
    case 'week':
      weekClicked = 'chart-btn--clicked';
      break;
    case 'month':
      monthClicked = 'chart-btn--clicked';
      break;
    case 'year':
      yearClicked = 'chart-btn--clicked';
      break;
    default:
  }

  return (
    <div className='chart-pg'>
      <span className='unit'>unit: minute</span>
      <div className='chart-btns'>
        <button
          className={`chart-btn ${dayClicked}`}
          type='button'
          onClick={() => {
            navigate('day');
            setCurChart('day');
          }}
        >
          Day
        </button>
        <button
          className={`chart-btn ${weekClicked}`}
          type='button'
          onClick={() => {
            navigate('week');
            setCurChart('week');
          }}
        >
          Week
        </button>
        <button
          className={`chart-btn ${monthClicked}`}
          type='button'
          onClick={() => {
            navigate('month');
            setCurChart('month');
          }}
        >
          Month
        </button>
        <button
          className={`chart-btn ${yearClicked} `}
          type='button'
          onClick={() => {
            navigate('year');
            setCurChart('year');
          }}
        >
          Year
        </button>
      </div>
      <Outlet />
    </div>
  );
}

export default Chart;
