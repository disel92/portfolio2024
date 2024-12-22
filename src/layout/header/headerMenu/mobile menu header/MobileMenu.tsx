import React, {useState} from "react";
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

export const MobileMenu: React.FC <{ menuItem: Array<string> }> = (props: { menuItem: Array<string> }) => {
    const [isOpen, isClose] = useState(false)
    const openBtn = () => {isClose(!isOpen)}
  return (
    <S.StyledMobileMenu>
      <S.BurgerButton isOpen={isOpen} onClick={openBtn}>
        <span></span>
      </S.BurgerButton>

      <S.MobileMenuPopup
        isOpen={isOpen} onClick={()=>{isClose(false)}}>
        <Menu menuItem={props.menuItem}/>
      </S.MobileMenuPopup>
    </S.StyledMobileMenu>
  );
};

