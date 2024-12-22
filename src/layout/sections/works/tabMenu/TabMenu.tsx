import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/links/Links";

type TabMenuPropsType = {
  tabsItems: Array<{status: TabsStatusType, title:string }>
  changeFilterStatus: (value: TabsStatusType) => void
  currentFilterStatus: string
}

export type TabsStatusType = "all"| "landing" | "react" | "spa"


export const TabMenu = (props: TabMenuPropsType ) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item: {status: TabsStatusType, title:string }, index:number) => {
                    return <ListTabItems key={index}>
                        <Link active={props.currentFilterStatus === item.status} onClick={()=> {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </ListTabItems>
                })}
            </ul>
        </StyledTabMenu>
    );
};



const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    padding-right: 10px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListTabItems = styled.li `
  text-transform: uppercase;
`

