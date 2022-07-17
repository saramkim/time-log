import { useEffect, useState } from 'react';

import { useInterval } from 'components/UseInterval';

import 'react-circular-progressbar/dist/styles.css';
import 'css/Timer.css';

function Timer() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(10);
  const [time, setTime] = useState(10);

  useEffect(() => {
    setTime(min * 60 + sec);
  }, [min]);

  useInterval(
    () => {
      setMin(Math.floor(time / 60));
      setSec(time % 60);
      setTime(time - 1);
    },
    time !== -1 ? 1000 : null
  );

  return (
    <div className='timer-pg'>
      {time === -1 ? (
        <WhatIDid setMin={setMin} />
      ) : (
        <div className='timer'>
          {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
        </div>
      )}
    </div>
  );
}

function WhatIDid({ setMin }: { setMin: any }) {
  const [did, setDid] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(did);
          setMin(1);
        }}
      >
        <input
          required
          onChange={(e) => {
            setDid(e.target.value);
          }}
          name='name'
          placeholder='What I Did?'
        />
        <button type='submit'> Check</button>
      </form>
    </div>
  );
}

export default Timer;
