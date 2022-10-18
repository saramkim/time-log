import { useEffect, useState } from 'react';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

import 'react-circular-progressbar/dist/styles.css';

function Circularbar({ time, darkMode }: { time: number; darkMode: boolean }) {
  const timeSet = useSelector((state: RootState) => state.alarm);
  const [trail, setTrail] = useState('');

  useEffect(() => {
    if (darkMode) {
      setTrail('rgb(45, 45, 45)');
    } else {
      setTrail('#f0f0f0');
    }
  }, [darkMode]);

  return (
    <CircularProgressbar
      value={timeSet - time}
      maxValue={timeSet - 1}
      // text={`${time}`}
      className='circularbar'
      strokeWidth={50}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 1,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',

        // Text size
        // textSize: '3em',

        // How long animation takes to go from one percentage to another, in seconds
        pathTransitionDuration: 0.5,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: `rgba(220, 20, 60, 1)`,
        // pathColor: `rgba(220, 20, 60, ${(timeSet - time) / timeSet})`,
        // textColor: 'black',
        trailColor: trail,

        // backgroundColor: 'white',
      })}
    />
  );
}

export default Circularbar;
