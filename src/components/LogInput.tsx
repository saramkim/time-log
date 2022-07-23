import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { pStart } from 'store';

function LogInput({ time, setTime }: { time: number; setTime: any }) {
  const [did, setDid] = useState('');
  const dispatch = useDispatch();
  // const inputData = JSON.stringify({ [did]: time });
  // const inputData = JSON.stringify({ name: time });
  // const bbb = JSON.parse(inputData);
  // const abc = localStorage.getItem('공부');
  // const abcd = JSON.parse(abc!);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // const aaa = localStorage.getItem('공부');
          // const LSItem = JSON.parse(aaa);
          // LSItem.push(inputData);
          // localStorage.setItem('공부', JSON.stringify(LSItem));
          // localStorage.setItem('공부', inputData);

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
      {/* <div>{abcd} </div> */}
    </div>
  );
}

export default LogInput;
function newDate() {
  throw new Error('Function not implemented.');
}
