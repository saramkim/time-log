import { useEffect, useState } from 'react';

import Count from 'components/Count';
import LogInput from 'components/LogInput';
import { preventEvent } from 'hooks/preventEvent';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart, pStop, RootState } from 'store';

import 'css/Timer.css';

function Timer() {
  const [time, setTime] = useState(0);
  const curProcess = useSelector((state: RootState) => state.process);
  const dispatch = useDispatch();

  let timerStop = '';
  if (curProcess === 'stop') {
    timerStop = 'timer-pg--stop';
  }
  preventEvent();

  const enterEvent = (e: WindowEventMap['keydown']) => {
    if (e.key === 'Enter') {
      dispatch(pStart());
    }
  };
  const waringGoBack = () => {
    window.alert(`Not logged yet.`);
  };
  useEffect(() => {
    if (curProcess === 'stop') {
      window.addEventListener('keydown', enterEvent);
      setTime(0);
    } else {
      window.addEventListener('popstate', waringGoBack);
    }
    return () => {
      window.removeEventListener('keydown', enterEvent);
      window.removeEventListener('popstate', waringGoBack);
    };
  }, [curProcess]);

  useEffect(() => {
    return () => {
      dispatch(pStop());
    };
  }, []);

  const processBtn = {
    stop: (
      <button
        className='timer-btn timer-btn--start'
        onClick={() => {
          dispatch(pStart());
        }}
      >
        Start
      </button>
    ),

    start: (
      <button
        className='timer-btn timer-btn--log'
        onClick={() => {
          dispatch(pLog());
        }}
      >
        Log
      </button>
    ),
  };

  return (
    <>
      <div className={`timer-pg ${timerStop}`}>
        {curProcess === 'log' ? (
          <LogInput time={time} />
        ) : (
          <Count time={time} setTime={setTime} upDown='up' />
        )}
      </div>
      {processBtn[curProcess]}
    </>
  );
}

export default Timer;
