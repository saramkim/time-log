import { useNavigate } from 'react-router-dom';

import { ImArrowLeft2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { pStop, RootState } from 'store';
import styled from 'styled-components';

function BackButton() {
  const navigate = useNavigate();
  const process = useSelector((state: RootState) => state.process);
  const dispatch = useDispatch();

  const goBackPage = () => {
    if (process === 'stop') {
      navigate('/');
    } else if (window.confirm(`Not logged. Are you sure?`)) {
      navigate('/');
      dispatch(pStop());
    }
  };

  return (
    <BackBtn onClick={goBackPage}>
      <ImArrowLeft2 />
    </BackBtn>
  );
}

export default BackButton;

const BackBtn = styled.button`
  font-size: 2rem;
  width: 1.8em;
  height: 1.8em;
  position: fixed;
  top: 120px;
  left: 0;
  z-index: 10;
  border-radius: 0 10% 10% 0;
  border: none;
  padding-top: 0.2em;

  @media (max-width: 768px) {
    top: 190px;
  }
`;
