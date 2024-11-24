import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Link = styled.a `
  font-size: 14px;
  letter-spacing: 1px;
  padding: 10px;

  position: relative;
  z-index: 0;
  
  &:hover {
    &::before {
      height: 10px;
    }
  }

  &::before {
    content: '';
    display: inline-block;
    left: 0;
    right: 0;
    background-color: ${theme.colors.accent};

    position: absolute;
    bottom: 6px;
    z-index: -1;
  }
`