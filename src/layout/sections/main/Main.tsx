import React from 'react';
import photo from '../../../assets/images/Kitten-running-jump-wildflowers_iphone_640x960.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (

        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <section>
                        <SmallText>Hi There</SmallText>
                        <Name>I am
                            <span>Dmitry Gurenko</span>
                        </Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </section>

                    <PhotoWrapper>
                        <Photo src={photo} alt='foto'/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  background-color: black;
  min-height: 100vh;
  color: rgba(255, 255, 255, 1);
  display: flex;

`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`


const MainTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`


const SmallText = styled.span`
  font-size: 14px;
`

const Name = styled.h2`
  font-family: Josefin Sans, sans-serif;
  font-size: 50px;
  letter-spacing: 0.05px;
  margin: 10px 0;

  span {
    margin-left: 10px;
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }

  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 360px;
      height: 470px;
      border: 5px solid ${theme.colors.accent};
      top: -24px;
      left: 10px;
      z-index: -1;
    }
`
