import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'center'}
                align={'center'}>
                    <Skill iconId={'codeSvg'}
                           title={'Html5'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'css3'}
                           title={'css3'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'reactSvg'}
                           title={'React'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'typescriptSvg'}
                           title={'typescript'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'styledComponentsIcon'}
                           title={'styled components'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'figmaSvg2'}
                           title={'WEB DESIgN'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

export const StyledSkills = styled.section`
  
`

