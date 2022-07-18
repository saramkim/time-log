import { useState } from 'react';

import Count from 'components/Count';
import LogInput from 'components/LogInput';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart, pStop } from 'store';

import 'css/Timer.css';

function Timer() {
  const [time, setTime] = useState(0);
  const process = useSelector((state: any) => state.process);
  const dispatch = useDispatch();

  return (
    <>
      <div className='timer-pg'>
        {process === 'log' ? (
          <LogInput setTime={setTime} />
        ) : (
          <Count time={time} setTime={setTime} upDown='up' />
        )}
      </div>
      <section>
        <button
          className='timer-btn'
          type='button'
          onClick={() => {
            dispatch(pStart());
          }}
        >
          Start
        </button>
        <button
          className='timer-btn'
          type='button'
          onClick={() => {
            dispatch(pStop());
          }}
        >
          Stop
        </button>
        <button
          className='timer-btn'
          type='button'
          onClick={() => {
            dispatch(pLog());
          }}
        >
          Log
        </button>
      </section>
    </>
  );
}

export default Timer;
