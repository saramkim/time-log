import { useInterval } from 'hooks/useInterval';
import { useSelector } from 'react-redux';

function Count({ time, setTime, upDown }: { time: number; setTime: any; upDown: string }) {
  const process = useSelector((state: any) => state.process);
  let min = Math.floor(time / 60);
  let sec = time % 60;

  let countTime = (time: number): number => time;
  if (upDown === 'up') {
    countTime = (time: number): number => time + 1;
  } else if (upDown === 'down') {
    countTime = (time: number): number => time - 1;
  }

  useInterval(
    () => {
      setTime(countTime);
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
