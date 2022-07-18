import { useState } from 'react';

import 'css/Settings.css';

function Settings() {
  const [time, setTime] = useState(15);
  return (
    <div className='settings'>
      <form className='timeset'>
        <input
          className='timeset__input'
          type='range'
          min='1'
          max='30'
          value={time}
          onChange={(e) => {
            setTime(Number(e.target.value));
          }}
        />
        <div className='timeset__text'>Alarm time - {time} m</div>
        <section className='settings__btns'>
          <button className='settings__btn' type='submit'>
            Check
          </button>
          <button className='settings__btn' type='submit'>
            Cancel
          </button>
        </section>
      </form>
    </div>
  );
}

export default Settings;
