import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Settings from 'components/Settings';

import 'css/Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState(false);

  return (
    <>
      <div className='navbar'>
        <div
          className='navbar__left'
          role='button'
          tabIndex={0}
          onKeyPress={() => {
            navigate('/');
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          <span>TimeLog</span>
          <span>@</span>
        </div>
        <div className='navbar__right'>
          <span>@</span>
          <span>@</span>
          <div
            className='navbar__right__settings'
            role='button'
            tabIndex={-1}
            onKeyPress={() => {
              setSettings(!settings);
            }}
            onClick={() => {
              setSettings(!settings);
            }}
          >
            @
          </div>
        </div>
      </div>
      <div>{settings && <Settings setSettings={setSettings} />}</div>
    </>
  );
}

export default Navbar;
