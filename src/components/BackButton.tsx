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
  width: 1.75em;
  height: 1.75em;

  position: fixed;
  top: 2.75em;
  left: 1em;
  z-index: 10;
  border-radius: 10%;
  border: none;
`;
