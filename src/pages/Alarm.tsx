import { useEffect } from 'react';

import CountDown from 'components/CountDown';
import WhatIDid from 'components/WhatIDid';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart, setTime } from 'store';

import 'css/Timer.css';

function Alarm() {
  const time = useSelector((state: any) => state.time);
  const process = useSelector((state: any) => state.process);
  const dispatch = useDispatch();

  if (time === -1) {
    dispatch(pLog());
  }

  useEffect(() => {
    dispatch(setTime(10));
  }, [process]);

  return (
    <>
      <div className='timer-pg'>{process === 'log' ? <WhatIDid /> : <CountDown />}</div>
      <button
        type='button'
        onClick={() => {
          dispatch(pStart());
        }}
      >
        Start
      </button>
    </>
  );
}

export default Alarm;
