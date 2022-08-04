import { useEffect, useState } from 'react';

import Circularbar from 'components/Circularbar';
import Count from 'components/Count';
import LogInput from 'components/LogInput';
import { useDispatch, useSelector } from 'react-redux';
import { pLog, pStart } from 'store';

import 'css/Timer.css';

function Alarm({ darkMode }: { darkMode: boolean }) {
  const alarm = useSelector((state: any) => state.alarm);
  const process = useSelector((state: any) => state.process);
  const [time, setTime] = useState(alarm);
  const dispatch = useDispatch();

  useEffect(() => {
    setTime(alarm);
  }, [process, alarm]);

  useEffect(() => {
    if (time === -1) {
      dispatch(pLog());
    }
  }, [time]);

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';
  };
  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  const preventGoBack = () => {
    window.history.pushState(null, '', window.location.href);
  };
  useEffect(() => {
    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', preventGoBack);
    return () => {
      window.removeEventListener('popstate', preventGoBack);
    };
  }, []);

  const enterEvent = (e: any) => {
    if (e.key === 'Enter') {
      dispatch(pStart());
    }
  };
  useEffect(() => {
    if (process === 'stop') {
      window.addEventListener('keydown', enterEvent);
    }
    return () => {
      window.removeEventListener('keydown', enterEvent);
    };
  }, [process]);

  const AlarmUI = {
    log: <LogInput time={alarm - time - 1} setTime={setTime} />,
    start: (
      <div>
        <Circularbar time={time} darkMode={darkMode} />
        <Count time={time} setTime={setTime} upDown='down' />
      </div>
    ),
    stop: (
      <>
        {/* <div>
          <Circularbar time={time} darkMode={darkMode} />
          <Count time={time} setTime={setTime} upDown='down' />
        </div> */}
        <button
          className='check-btn'
          type='button'
          onClick={() => {
            dispatch(pStart());
          }}
        >
          Start
        </button>
      </>
    ),
  };
  return <div className='timer-pg'>{AlarmUI[process]}</div>;
}

export default Alarm;
