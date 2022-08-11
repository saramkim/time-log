import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setAlarm, setFocus } from 'store';

import 'css/Settings.css';
import 'css/abstract.css';

function Settings({ setSettings }: { setSettings: any }) {
  const alarm: number = useSelector((state: any) => state.alarm);
  const [timeset, setTimeset] = useState(alarm / 60);
  const dispatch = useDispatch();
  const [addAnimation, setAddAnimation] = useState('');
  const focus = useSelector((state: any) => state.focus);
  const [myFocus, setMyFocus] = useState(focus);
  const [popupState, setPopupState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAddAnimation('settings--animation');
    }, 10);
    return () => {
      setAddAnimation('');
    };
  }, []);

  const applySettings = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch(setAlarm(timeset * 60));
    dispatch(setFocus(myFocus));
  };

  const timesetPlusOne = () => {
    if (timeset < 99) {
      setTimeset((timeset) => timeset + 1);
    }
  };

  const toastPopup = () => {
    setPopupState(true);
    setTimeout(() => {
      setPopupState(false);
    }, 1500);
  };

  return (
    <div className={`settings ${addAnimation}`}>
      <form onSubmit={applySettings}>
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
          <div role='button' tabIndex={0} onKeyPress={timesetPlusOne} onClick={timesetPlusOne}>
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
          <button className='settings__btn' type='submit' onClick={toastPopup}>
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

      {popupState === true && <div className='toast-popup'>It has been applied.</div>}
    </div>
  );
}

export default Settings;
