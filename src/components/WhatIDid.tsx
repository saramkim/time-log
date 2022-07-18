import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { pStart, setTime } from 'store';

function WhatIDid() {
  const [did, setDid] = useState('');
  const dispatch = useDispatch();
  const time = useSelector((state: any) => state.time);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setTime(0));
          dispatch(pStart());
          console.log(did);
        }}
      >
        <input
          className='WID-input'
          required
          onChange={(e) => {
            setDid(e.target.value);
          }}
          placeholder='What I Did?'
        />
        <button className='check-btn' type='submit'>
          Check
        </button>
      </form>
    </div>
  );
}

export default WhatIDid;
