import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Settings from 'components/Settings';
import { BsMoon, BsSun } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { pStop } from 'store';

import 'css/Navbar.css';

function Navbar({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: any }) {
  const navigate = useNavigate();
  const process = useSelector((state: any) => state.process);
  const [settings, setSettings] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className='navbar'>
        <div
          className='navbar__left'
          role='button'
          tabIndex={0}
          onKeyPress={() => {
            if (process === 'stop') {
              navigate('/');
            } else if (window.confirm(`You haven't logged yet. Are you sure?`)) {
              navigate('/');
              dispatch(pStop());
            }
          }}
          onClick={() => {
            if (process === 'stop') {
              navigate('/');
            } else if (window.confirm(`You haven't logged yet. Are you sure?`)) {
              navigate('/');
              dispatch(pStop());
            }
          }}
        >
          <span>TimeLog</span>
        </div>
        <div className='navbar__right'>
          <span>@</span>

          <div
            className='navbar__right__btn'
            role='button'
            tabIndex={-1}
            onKeyPress={() => {
              setDarkMode(!darkMode);
            }}
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? <BsMoon /> : <BsSun />}
          </div>

          <div
            className='navbar__right__btn'
            role='button'
            tabIndex={-2}
            onKeyPress={() => {
              setSettings(!settings);
            }}
            onClick={() => {
              setSettings(!settings);
            }}
          >
            <IoSettingsOutline />
          </div>
        </div>
      </div>
      <div>{settings && <Settings setSettings={setSettings} />}</div>
    </>
  );
}

export default Navbar;
