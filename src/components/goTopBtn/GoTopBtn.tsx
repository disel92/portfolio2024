import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

  const [showBtn, setShowBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", ()=> {
      if(window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={()=> {scroll.scrollToTop()}}>
          <Icon iconId={"arrows"} width={"16px"} height={"15px"} viewBox={"0,0,30,30"}
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button `
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 7px;
  
  position: fixed;
  right: 30px;
  bottom: 30px;
`