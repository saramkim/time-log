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

  if (time === -1) {
    dispatch(pLog());
  }

  const AlarmUI = {
    log: <LogInput setTime={setTime} />,
    start: (
      <div>
        <Circularbar time={time} darkMode={darkMode} />
        <Count time={time} setTime={setTime} upDown='down' />
      </div>
    ),
    stop: (
      <button
        className='check-btn'
        type='button'
        onClick={() => {
          dispatch(pStart());
        }}
      >
        Start
      </button>
    ),
  };
  return <div className='timer-pg'>{AlarmUI[process]}</div>;
}

export default Alarm;
