import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;

  li {
    padding: 15px;
    position: relative;
    color: var(--text-light);
    letter-spacing: 3px;
    opacity: .8;
    cursor: pointer;
    transition: all .3s ease;

    &::after {
      content: "";
      width: 0%;
      height: 1px;
      background-color: var(--text-light);
      position: absolute;
      left: 0;
      bottom: 1px;
      transition: all .6s ease;
    }

    &:hover {
      opacity: 1;

      &::after {
        width: 100%;
      }
    } 
  }
`