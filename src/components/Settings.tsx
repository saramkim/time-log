import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setAlarm } from 'store';

import 'css/Settings.css';

function Settings({ setSettings }: { setSettings: any }) {
  const [timeset, setTimeset] = useState(15);
  const dispatch = useDispatch();

  return (
    <div className='settings'>
      <form
        className='timeset'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(setAlarm(timeset));
        }}
      >
        <input
          className='timeset__input'
          type='range'
          min='1'
          max='30'
          value={timeset}
          onChange={(e) => {
            setTimeset(Number(e.target.value));
          }}
        />
        <div className='timeset__text'>Alarm timeset - {timeset} m</div>
        <section className='settings__btns'>
          <button className='settings__btn' type='submit'>
            Check
          </button>
          <button
            className='settings__btn'
            type='button'
            onClick={() => {
              setSettings(false);
            }}
          >
            Cancel
          </button>
        </section>
      </form>
    </div>
  );
}

export default Settings;
