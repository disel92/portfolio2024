import React from "react";
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

export const DesktopMenu: React.FC <{ menuItem: Array<string> }> = (props: { menuItem: Array<string> }) => {
  return (
    <S.StyledDesktopMenu>
     <Menu menuItem={props.menuItem}/>
    </S.StyledDesktopMenu>
  );
};



