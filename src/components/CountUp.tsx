import { useState } from 'react';

import { useInterval } from 'hooks/UseInterval';
import { useDispatch, useSelector } from 'react-redux';
import { countUp } from 'store';

function CountUp() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const time = useSelector((state: any) => state.time);
  const process = useSelector((state: any) => state.process);
  const dispatch = useDispatch();

  useInterval(
    () => {
      setMin(Math.floor(time / 60));
      setSec(time % 60);
      dispatch(countUp());
    },
    process === 'start' ? 1000 : null
  );

  return (
    <div className='timer'>
      {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
    </div>
  );
}

export default CountUp;
