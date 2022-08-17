import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import 'css/Chart.css';

function Chart() {
  const navigate = useNavigate();
  const [curChart, setCurChart] = useState('');

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
      <div className='unit'>unit: minute</div>
      <div className='chart-btns'>
        <button
          className={`chart-btn ${dayClicked}`}
          onClick={() => {
            navigate('day');
          }}
        >
          Day
        </button>
        <button
          className={`chart-btn ${weekClicked}`}
          onClick={() => {
            navigate('week');
          }}
        >
          Week
        </button>
        <button
          className={`chart-btn ${monthClicked}`}
          onClick={() => {
            navigate('month');
          }}
        >
          Month
        </button>
        <button
          className={`chart-btn ${yearClicked} `}
          onClick={() => {
            navigate('year');
          }}
        >
          Year
        </button>
      </div>
      <Outlet context={setCurChart} />
    </div>
  );
}

export default Chart;
