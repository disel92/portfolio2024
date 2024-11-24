import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <Button>Hire Me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  background-color: #4ee1b6;
  min-height: 30vh;
  
`

