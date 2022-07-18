import CountUp from 'components/CountUp';
import WhatIDid from 'components/WhatIDid';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart, pStop, setTime } from 'store';

import 'css/Timer.css';

function Timer() {
  const time = useSelector((state: any) => state.time);
  const process = useSelector((state: any) => state.process);
  const dispatch = useDispatch();

  return (
    <>
      <div className='timer-pg'>{process === 'log' ? <WhatIDid /> : <CountUp />}</div>
      <button
        type='button'
        onClick={() => {
          dispatch(pStart());
        }}
      >
        Start
      </button>
      <button
        type='button'
        onClick={() => {
          dispatch(pStop());
        }}
      >
        Stop
      </button>
      <button
        type='button'
        onClick={() => {
          dispatch(pLog());
        }}
      >
        Log
      </button>
    </>
  );
}

export default Timer;
