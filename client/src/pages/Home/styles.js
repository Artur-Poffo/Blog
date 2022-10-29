import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 5px;
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--base);
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 60px;
    color: var(--contrast);
    text-align: center;

    a {
      color: rgb(0,255,255);
      text-decoration: underline;
    }
  }
`;
