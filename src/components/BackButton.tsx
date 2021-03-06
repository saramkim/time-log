import { useNavigate } from 'react-router-dom';

import { ImArrowLeft2 } from 'react-icons/im';
import styled from 'styled-components';

function BackButton() {
  const navigate = useNavigate();

  return (
    <BackBtn
      onClick={() => {
        navigate('/');
      }}
    >
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

  @media screen and (max-width: 552px) {
    display: none;
  }
`;
