import { FormEvent, useState } from 'react';

import getToday from 'hooks/getToday';
import { useDispatch, useSelector } from 'react-redux';
import { pStop, RootState } from 'store';

function LogInput({ time }: { time: number }) {
  const [did, setDid] = useState('');
  const dispatch = useDispatch();
  const date = getToday();
  const [inputAnimation, setInputAnimation] = useState('');
  const focus = useSelector((state: RootState) => state.focus);
  const [selectFocus, setSelectFocus] = useState('');

  const pushLogToLS = (e: FormEvent) => {
    e.preventDefault();
    const LSItem = JSON.parse(localStorage.getItem(date) || '{}');
    const restriction = /^[가-힣a-zA-Z\s]+$/;
    const checkSpace = did.slice(did.length - 1, did.length) === ' ' || did.slice(0, 1) === ' ';

    if (!did.match(restriction)) {
      window.alert('정확한 한글, 영문만 입력 가능합니다.');
    } else if (checkSpace) {
      window.alert('공백은 글자 사이에만 입력 가능합니다.');
    } else {
      if (LSItem[did] === undefined) {
        LSItem[did] = time;
      } else {
        LSItem[did] += time;
      }
      localStorage.setItem(date, JSON.stringify(LSItem));
      setInputAnimation('log-input--animation');
      setTimeout(() => dispatch(pStop()), 400);
    }
  };
  return (
    <div>
      {selectFocus !== focus && (
        <button
          className='timer-btn timer-btn--focus'
          onClick={() => {
            setDid(focus);
            setSelectFocus(focus);
          }}
        >
          {focus}
        </button>
      )}
      <form onSubmit={pushLogToLS}>
        <input
          className={`log-input ${inputAnimation}`}
          autoFocus
          required
          defaultValue={selectFocus}
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
