import { useState } from 'react';

import Today from 'components/Today';
import { useDispatch } from 'react-redux';
import { pStop } from 'store';

function LogInput({ time }: { time: number }) {
  const [did, setDid] = useState('');
  const dispatch = useDispatch();
  const date = Today();
  const [inputAnimation, setInputAnimation] = useState('');

  return (
    <div>
      <form
        onSubmit={(e) => {
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
        }}
      >
        <input
          className={`log-input ${inputAnimation}`}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          required
          onChange={(e) => {
            setDid(e.target.value);
          }}
          placeholder='Log what I did'
        />
        <button className='timer-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LogInput;
