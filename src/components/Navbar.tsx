import { useNavigate } from 'react-router-dom';

import 'css/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
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
        <span>@</span>
        <span>TimeLog</span>
      </div>
      <div className='navbar__right'>
        <span>@</span>
        <span>@</span>
        <span>@</span>
      </div>
    </div>
  );
}

export default Navbar;
