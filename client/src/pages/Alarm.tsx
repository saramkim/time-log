import { useEffect, useState } from 'react';

import Circularbar from 'components/Circularbar';
import Count from 'components/Count';
import LogInput from 'components/LogInput';
import { preventEvent } from 'hooks/preventEvent';
import logo from 'images/TimeLog-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart, pStop, RootState } from 'store';

import 'css/Timer.css';

function Alarm({ darkMode }: { darkMode: boolean }) {
  const alarm = useSelector((state: RootState) => state.alarm);
  const curProcess = useSelector((state: RootState) => state.process);
  const [time, setTime] = useState(alarm);
  const dispatch = useDispatch();

  let timerStop = '';
  if (curProcess === 'stop') {
    timerStop = 'timer-pg--stop';
  }

  preventEvent();

  useEffect(() => {
    setTime(alarm);
  }, [alarm]);

  const notificationRequest = () =>
    Notification.requestPermission((permission) => {
      if (permission === 'denied') {
        window.alert('Please allow notifications access to continue');
      }
    });
  const navigationTiming = performance.getEntriesByType(
    'navigation'
  )[0] as unknown as PerformanceNavigationTiming;
  const notificationOption = {
    body: 'Log what you did.',
    icon: logo,
    actions: [{ title: 'Log', action: 'log' }],
    tag: 'timelog-notification',
    vibrate: [200, 100, 200, 100],
    requireInteraction: true,
    renotify: true,
  };

  useEffect(() => {
    notificationRequest();
    if (navigationTiming.type === 'navigate') {
      window.location.reload();
    }

    return () => {
      dispatch(pStop());
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification('Time out!', notificationOption);
      });
      dispatch(pLog());
    }
  }, [time]);

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
      setTime(alarm);
    } else {
      window.addEventListener('popstate', waringGoBack);
    }
    return () => {
      window.removeEventListener('keydown', enterEvent);
      window.removeEventListener('popstate', waringGoBack);
    };
  }, [curProcess]);

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
          <LogInput time={alarm - time} />
        ) : (
          <Count time={time} setTime={setTime} upDown='down' />
        )}
        {curProcess === 'start' && <Circularbar time={time} darkMode={darkMode} />}
      </div>
      {processBtn[curProcess]}
    </>
  );
}

export default Alarm;
