import { FormEvent, useState } from 'react';

import getToday from 'hooks/getToday';
import { useDispatch } from 'react-redux';
import { pStop } from 'store';

function LogInput({ time }: { time: number }) {
  const [did, setDid] = useState('');
  const dispatch = useDispatch();
  const date = getToday();
  const [inputAnimation, setInputAnimation] = useState('');

  const pushLogToLS = (e: FormEvent) => {
    e.preventDefault();
    const LSItem = JSON.parse(localStorage.getItem(date) || '{}');
    if (LSItem[did] === undefined) {
      LSItem[did] = time;
    } else {
      LSItem[did] += time;
    }
    localStorage.setItem(date, JSON.stringify(LSItem));
    setInputAnimation('log-input--animation');
    setTimeout(() => dispatch(pStop()), 400);
  };

  return (
    <div>
      <form onSubmit={pushLogToLS}>
        <input
          className={`log-input ${inputAnimation}`}
          autoFocus
          required
          onChange={(e) => {
            setDid(e.target.value);
          }}
          placeholder='Log what you did'
        />
        <button className='timer-btn timer-btn--submit'>Submit</button>
      </form>
    </div>
  );
}

export default LogInput;
