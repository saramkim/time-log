import { Dispatch, SetStateAction } from 'react';

import { useInterval } from 'hooks/useInterval';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

function Count({
  time,
  setTime,
  upDown,
}: {
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  upDown: string;
}) {
  const process = useSelector((state: RootState) => state.process);
  let min = Math.floor(time / 60);
  let sec = time % 60;

  useInterval(
    () => {
      if (upDown === 'up') {
        setTime((time) => time + 1);
      } else if (upDown === 'down') {
        setTime((time) => time - 1);
      }
      sec = time % 60;
      min = Math.floor(time / 60);
    },
    process === 'start' ? 1000 : null
  );

  return (
    <div className='timer'>
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}

export default Count;
