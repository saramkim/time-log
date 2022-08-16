import { Dispatch, SetStateAction, useEffect } from 'react';

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
  const min = Math.floor(time / 60);
  const sec = time % 60;

  const worker = new Worker(new URL('worker/worker', import.meta.url));
  useEffect(() => {
    worker.postMessage(process);
    worker.onmessage = (e: MessageEvent<string>) => {
      setTime(Number(e.data));
    };
    return () => {
      worker.postMessage('stop');
    };
  }, [process]);

  // useInterval(
  //   () => {
  //     if (upDown === 'up') {
  //       setTime((time) => time + 1);
  //     } else if (upDown === 'down') {
  //       setTime((time) => time - 1);
  //     }
  //     sec = time % 60;
  //     min = Math.floor(time / 60);
  //   },
  //   process === 'start' ? 1000 : null
  // );

  return (
    <div className='timer'>
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}

export default Count;
