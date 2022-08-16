import { useEffect, useState } from 'react';

import Count from 'components/Count';
import LogInput from 'components/LogInput';
import { preventEvent } from 'hooks/preventEvent';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart, RootState } from 'store';

import 'css/Timer.css';

function Timer() {
  const [time, setTime] = useState(0);
  const process = useSelector((state: RootState) => state.process);
  const dispatch = useDispatch();

  const worker = new Worker(new URL('worker/worker', import.meta.url));

  // useEffect(() => {
  //   return () => {
  //     worker.postMessage(process);
  //   };
  // }, []);

  // useEffect(() => {
  //   worker.postMessage(process);
  //   worker.onmessage = (e: MessageEvent<string>) => {
  //     setTime(Number(e.data));
  //   };
  // }, [process]);

  // useEffect(() => {
  //   if (window.Worker) {
  //     console.log(`timer:${process}`);
  //     worker.postMessage(process);
  //   }
  //   if (process === 'start') {
  //     worker.onmessage = (e: MessageEvent<string>) => {
  //       setTime(Number(e.data));
  //     };
  //   } else if (process === 'stop') {
  //     setTime(0);
  //   }
  // }, [process]);

  let timerStop = '';
  if (process === 'stop') {
    timerStop = 'timer-pg--stop';
  }
  preventEvent();

  const enterEvent = (e: WindowEventMap['keydown']) => {
    if (e.key === 'Enter') {
      dispatch(pStart());
    }
  };
  useEffect(() => {
    if (process === 'stop') {
      window.addEventListener('keydown', enterEvent);
      // setTime(0);
    }
    return () => {
      window.removeEventListener('keydown', enterEvent);
    };
  }, [process]);

  const processBtn = {
    stop: (
      <button
        className='timer-btn timer-btn--start'
        type='button'
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
        type='button'
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
        {process === 'log' ? (
          <LogInput time={time} />
        ) : (
          <Count time={time} setTime={setTime} upDown='up' />
        )}
      </div>
      {processBtn[process]}
    </>
  );
}

export default Timer;
