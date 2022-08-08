import { useEffect, useState } from 'react';

import Circularbar from 'components/Circularbar';
import Count from 'components/Count';
import LogInput from 'components/LogInput';
import { preventEvent } from 'hooks/preventEvent';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart } from 'store';

import 'css/Timer.css';

function Alarm({ darkMode }: { darkMode: boolean }) {
  const alarm = useSelector((state: any) => state.alarm);
  const process = useSelector((state: any) => state.process);
  const [time, setTime] = useState(alarm);
  const dispatch = useDispatch();

  let timerStop = '';
  if (process === 'stop') {
    timerStop = 'timer-pg--stop';
  }

  Notification.requestPermission((permission) => {
    if (permission === 'denied') {
      window.alert('Please allow notifications access to continue');
    }
  });

  useEffect(() => {
    setTime(alarm);
  }, [alarm]);

  useEffect(() => {
    if (time === 0) {
      spawnNotification('Log what you did.', 'TimeLog-logo.png', 'Time out!');
      dispatch(pLog());
    }
  }, [time]);

  preventEvent();

  const enterEvent = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(pStart());
    }
  };
  useEffect(() => {
    if (process === 'stop') {
      window.addEventListener('keydown', enterEvent);
      setTime(alarm);
    }

    // } else if (process === 'log') {

    // }

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
          <LogInput time={alarm - time} />
        ) : (
          <Count time={time} setTime={setTime} upDown='down' />
        )}
        {process === 'start' && <Circularbar time={time} darkMode={darkMode} />}
      </div>
      {processBtn[process]}
    </>
  );
}

function spawnNotification(theBody: string, theIcon: string, theTitle: string) {
  const options = {
    body: theBody,
    icon: theIcon,
  };
  const n = new Notification(theTitle, options);
}

export default Alarm;
