import { useNavigate } from 'react-router-dom';

import 'css/Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <div className='main-pg'>
      <div className='main-pg__title'>
        <p>Control Your Time</p>
        <h1>TimeLog</h1>
      </div>

      <div className='main-pg__btns'>
        <button
          type='submit'
          onClick={() => {
            navigate('/alarm');
          }}
        >
          Alarm
        </button>

        <button
          type='submit'
          onClick={() => {
            navigate('/timer');
          }}
        >
          Timer
        </button>

        <button
          type='submit'
          onClick={() => {
            navigate('/chart/day');
          }}
        >
          Chart
        </button>
      </div>
    </div>
  );
}

export default Main;
