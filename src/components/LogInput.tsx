import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { pStart } from 'store';

function LogInput({ setTime }: { setTime: any }) {
  const [did, setDid] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(pStart());
          setTime(0);
          console.log(did);
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
