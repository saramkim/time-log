import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { pStart } from 'store';

function LogInput({ time, setTime }: { time: number; setTime: any }) {
  const [did, setDid] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const LSItem = JSON.parse(localStorage.getItem('공부') || '{}');
          if (LSItem[did] === undefined) {
            LSItem[did] = time;
          } else {
            LSItem[did] += time;
          }
          localStorage.setItem('공부', JSON.stringify(LSItem));
          setTime(0);
          dispatch(pStart());
        }}
      >
        <input
          className='log-input'
          required
          onChange={(e) => {
            setDid(e.target.value);
          }}
          placeholder='What did I do?'
        />
        <button className='check-btn' type='submit'>
          Check
        </button>
      </form>
    </div>
  );
}

export default LogInput;
