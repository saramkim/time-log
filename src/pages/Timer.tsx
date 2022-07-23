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

  let startClicked = '';
  let stopClicked = '';
  let logClicked = '';
  switch (process) {
    case 'start':
      startClicked = 'timer-btn--clicked';
      break;
    case 'stop':
      stopClicked = 'timer-btn--clicked';
      break;
    case 'log':
      logClicked = 'timer-btn--clicked';
      break;
    default:
  }

  return (
    <>
      <div className='timer-pg'>
        {process === 'log' ? (
          <LogInput time={time - 1} setTime={setTime} />
        ) : (
          <Count time={time} setTime={setTime} upDown='up' />
        )}
      </div>
      <section>
        <button
          className={`timer-btn ${startClicked}`}
          type='button'
          onClick={() => {
            dispatch(pStart());
          }}
        >
          Start
        </button>
        <button
          className={`timer-btn ${stopClicked}`}
          type='button'
          onClick={() => {
            dispatch(pStop());
          }}
        >
          Stop
        </button>
        <button
          className={`timer-btn ${logClicked}`}
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
