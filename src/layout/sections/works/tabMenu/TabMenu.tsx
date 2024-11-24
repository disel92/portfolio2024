import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/links/Links";



export const TabMenu = (props: { menuItem: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItem.map((item: string, index:number) => {
                    return <ListTabItems key={index}>
                        <Link href="">{item}</Link>
                    </ListTabItems>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    padding-right: 10px;
    justify-content: center;
  }
`

const ListTabItems = styled.li `
  text-transform: uppercase;
  margin: 0 0 40px;
`

