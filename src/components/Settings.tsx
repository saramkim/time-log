import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setAlarm, setFocus } from 'store';

import 'css/Settings.css';

function Settings({ setSettings }: { setSettings: any }) {
  const alarm: number = useSelector((state: any) => state.alarm);
  const [timeset, setTimeset] = useState(alarm);
  const dispatch = useDispatch();
  const [addAnimation, setAddAnimation] = useState('');
  const focus = useSelector((state: any) => state.focus);
  const [myFocus, setMyFocus] = useState(focus);

  useEffect(() => {
    setAddAnimation('settings--animation');
  });

  return (
    <div className={`settings ${addAnimation}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setAlarm(timeset));
          dispatch(setFocus(myFocus));
        }}
      >
        <div className='timeset'>
          <input
            type='range'
            min='1'
            max='99'
            value={timeset}
            onChange={(e) => {
              setTimeset(Number(e.target.value));
            }}
          />
          <div
            role='button'
            tabIndex={0}
            onKeyPress={() => {
              if (timeset < 99) {
                setTimeset(timeset + 1);
              }
            }}
            onClick={() => {
              if (timeset < 99) {
                setTimeset(timeset + 1);
              }
            }}
          >
            Alarm time: {timeset}m
          </div>
        </div>

        <label htmlFor='focus-input' id='focus-label'>
          Focus:
          <input
            id='focus-input'
            placeholder={myFocus}
            onChange={(e) => setMyFocus(e.target.value)}
          />
        </label>

        <div className='settings__btns'>
          <button
            className='settings__btn'
            type='submit'
            onClick={() => {
              setSettings(false);
            }}
          >
            Apply
          </button>
          <button
            className='settings__btn'
            type='button'
            onClick={() => {
              setSettings(false);
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
