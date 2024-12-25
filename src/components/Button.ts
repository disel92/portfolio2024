import styled from "styled-components";
import {theme} from "../styles/Theme";


export const Button = styled.button `

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 50%;
    height: 10px;
    background-color: ${theme.colors.accent};
    transition: ${theme.animations.transition};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }

  &:hover {
    &::before {
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`