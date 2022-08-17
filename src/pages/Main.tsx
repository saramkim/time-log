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
          onClick={() => {
            navigate('/alarm');
          }}
        >
          Alarm
        </button>

        <button
          onClick={() => {
            navigate('/timer');
          }}
        >
          Timer
        </button>

        <button
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
