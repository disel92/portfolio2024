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
    padding-right: 10px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    //border: 1px solid white;
    margin: 0 auto 40px;
  }
`

const ListTabItems = styled.li `
  text-transform: uppercase;
`

