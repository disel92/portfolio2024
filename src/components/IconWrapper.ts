import React from 'react';
import styled from "styled-components";


export const IconWrapper = styled.div `
  position: relative;
  transition: .5s;

  &:hover {
    transform: scale(1.2);
  }

  &::before {
    content:"";
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);

    position: absolute;

    transform: rotate(45deg) translate(-50%, -50%);
    left: 50%;
    top: 50%;
    
    transform-origin: left top;
    
  }
`

