import { useEffect, useState } from 'react';

import Circularbar from 'components/Circularbar';
import Count from 'components/Count';
import LogInput from 'components/LogInput';
import { preventEvent } from 'hooks/preventEvent';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart, RootState } from 'store';

import 'css/Timer.css';

import logo from 'TimeLog-logo.png';

function Alarm({ darkMode }: { darkMode: boolean }) {
  const alarm = useSelector((state: RootState) => state.alarm);
  const process = useSelector((state: RootState) => state.process);
  const [time, setTime] = useState(alarm);
  const dispatch = useDispatch();
  const notificationRequest = () =>
    Notification.requestPermission((permission) => {
      if (permission === 'denied') {
        window.alert('Please allow notifications access to continue');
      }
    });

  let timerStop = '';
  if (process === 'stop') {
    timerStop = 'timer-pg--stop';
  }

  preventEvent();

  useEffect(() => {
    setTime(alarm);
  }, [alarm]);

  useEffect(() => {
    if (time === 0) {
      spawnNotification('Time out!', 'Log what you did.', logo);
      dispatch(pLog());
    }
  }, [time]);

  const enterEvent = (e: WindowEventMap['keydown']) => {
    if (e.key === 'Enter') {
      dispatch(pStart());
    }
  };
  useEffect(() => {
    if (process === 'stop') {
      window.addEventListener('keydown', enterEvent);
      setTime(alarm);
    }
    return () => {
      window.removeEventListener('keydown', enterEvent);
    };
  }, [process]);

  const processBtn = {
    stop: (
      <button
        className='timer-btn timer-btn--start'
        onClick={() => {
          notificationRequest();
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

function spawnNotification(theTitle: string, theBody: string, theIcon: string) {
  const options = {
    body: theBody,
    icon: theIcon,
  };
  const notification = new Notification(theTitle, options);
  return notification;
}

export default Alarm;
