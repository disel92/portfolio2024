import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import imageWork1 from '../../../assets/images/Social_Network.webp'
import imageWork2 from '../../../assets/images/timer.webp'
import {Container} from "../../../components/Container";

const worksItems = ['All', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItem={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Work title={'Social Network'}
                          src={imageWork1}

                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>

                    <Work title={'Timer'}
                          src={imageWork2}

                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
`

