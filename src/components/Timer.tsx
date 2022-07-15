import { FunctionComponent, useEffect, useRef, useState } from 'react';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import 'css/Timer.css';

function Timer() {
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);
  const time = useRef(min * 60 + sec);

  useInterval(() => {
    setMin(Math.floor(time.current / 60));
    setSec(time.current % 60);
    time.current -= 1;
  }, 1000);
  // const percentage = 50;
  return (
    <div>
      {time.current}
      <div>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </div>
      <WhatIDid // setMin={setMin} 해결할 것
      />
    </div>
  );
}

function WhatIDid() {
  const [did, setDid] = useState('');
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(did);
        }}
      >
        <input
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

function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Timer;

/* <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',

          // Text size
          textSize: '16px',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          textColor: '#f88',
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
        })}
      />
      ; */
