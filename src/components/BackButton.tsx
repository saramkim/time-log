import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

function BackButton() {
  const navigate = useNavigate();

  return (
    <BackBtn
      onClick={() => {
        navigate('/');
      }}
    >
      ◀
    </BackBtn>
  );
}

export default BackButton;

const BackBtn = styled.button`
  font-size: 2rem;
  width: 2em;
  height: 2em;
  position: fixed;
  top: 2.75em;
  left: 0;
  z-index: 10;
  border-radius: 0 10% 10% 0;
  border: none;

  @media screen and (max-width: 552px) {
    display: none;
  }
`;
