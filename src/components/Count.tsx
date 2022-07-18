import { useState } from 'react';

import { useInterval } from 'hooks/UseInterval';
import { useSelector } from 'react-redux';

function Count({ time, setTime, upDown }: { time: number; setTime: any; upDown: string }) {
  const [min, setMin] = useState(Math.floor(time / 60));
  const [sec, setSec] = useState(time % 60);
  const process = useSelector((state: any) => state.process);

  if (upDown === 'up') {
    useInterval(
      () => {
        setMin(Math.floor(time / 60));
        setSec(time % 60);
        setTime(time + 1);
      },
      process === 'start' ? 1000 : null
    );
  } else if (upDown === 'down') {
    useInterval(
      () => {
        setMin(Math.floor(time / 60));
        setSec(time % 60);
        setTime(time - 1);
      },
      process === 'start' ? 1000 : null
    );
  }

  return (
    <div className='timer'>
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}

export default Count;
