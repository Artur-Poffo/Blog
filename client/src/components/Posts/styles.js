import styled from 'styled-components';

export const Container = styled.a`
  display: block;
  width: 355px;
  padding: 20px;
  cursor: pointer;

  h2, p {
    letter-spacing: 2px;
    margin-top: 10px;
    color: var(--contrast);
    opacity: .6;
    text-align: left;
    transition: all .5s ease;
  }

  &:hover {
    h2, p {
      opacity: 1;
    }
  }
`;

export const Thumb = styled.div`
  width: 350px;
  height: 200px;
  border-radius: 5px;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`