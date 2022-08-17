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

  useEffect(() => {
    const worker = new Worker(new URL('worker/worker', import.meta.url));
    if (process === 'start') {
      worker.postMessage(upDown);
      worker.onmessage = (e: MessageEvent<string>) => {
        setTime(time + Number(e.data));
      };
    }
    return () => {
      worker.terminate();
    };
  }, [process]);

  return (
    <div className='timer'>
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}

export default Count;
