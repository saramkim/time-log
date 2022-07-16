import { useNavigate } from 'react-router-dom';

import 'css/Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <div className='main-pg'>
      <div className='main-pg__title'>
        <p>Change Your Time</p>
        <h1>Timelog</h1>
      </div>

      <section className='main-pg__btns'>
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
            navigate('/table');
          }}
        >
          Table
        </button>
        <button
          type='submit'
          onClick={() => {
            navigate('/clock');
          }}
        >
          Clock
        </button>
      </section>
    </div>
  );
}

export default Main;
