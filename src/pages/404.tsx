import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

function Page404() {
  const navigate = useNavigate();

  return (
    <Background>
      <span>{`That page can't be found.`}</span>
      <GoMainBtn onClick={() => navigate('/')}>Back to Home</GoMainBtn>
    </Background>
  );
}

export default Page404;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
  font-size: 2rem;
  font-weight: 500;
`;

const GoMainBtn = styled.button`
  background: crimson;
  color: white;
  font-size: 1.2rem;
  padding: 0.5em;
  border-radius: 10px;
  margin-top: 2em;
`;
