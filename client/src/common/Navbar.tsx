import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Information from 'common/Information';
import Settings from 'common/Settings';
import logo from 'images/TimeLog-logo.png';
import { BsInfoCircle, BsMoon, BsSun } from 'react-icons/bs';
import { IoSettingsOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { pStop, RootState } from 'store';

import 'css/Navbar.css';

function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const process = useSelector((state: RootState) => state.process);
  const [information, setInformation] = useState(false);
  const [settings, setSettings] = useState(false);
  const dispatch = useDispatch();

  const infoClicked = information ? 'navbar__right__btn--clicked' : '';
  const setClicked = settings ? 'navbar__right__btn--clicked' : '';

  const goMainPage = () => {
    if (process === 'stop') {
      navigate('/');
    } else if (window.confirm(`You haven't logged yet. Are you sure?`)) {
      navigate('/');
      dispatch(pStop());
    }
  };

  return (
    <>
      <div className='navbar'>
        <div
          className='navbar__left'
          role='button'
          tabIndex={0}
          onKeyPress={goMainPage}
          onClick={goMainPage}
        >
          <img src={logo} alt='@' />
          <h1>TimeLog</h1>
        </div>

        <div className='navbar__right'>
          <div
            className={`navbar__right__btn ${infoClicked}`}
            role='button'
            tabIndex={-1}
            onClick={() => {
              setInformation(!information);
            }}
            onKeyPress={() => {
              setInformation(!information);
            }}
          >
            <BsInfoCircle />
          </div>
          <div
            className='navbar__right__btn'
            role='button'
            tabIndex={-2}
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
            className={`navbar__right__btn ${setClicked}`}
            role='button'
            tabIndex={-3}
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
      <div>{information && <Information setInformation={setInformation} />}</div>
    </>
  );
}

export default Navbar;
