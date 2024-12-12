import React from 'react';
import photo from '../../../assets/images/Kitten-running-jump-wildflowers_iphone_640x960.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (

        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <section>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Gurenko Dmitry</span>
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
  outline: 1px solid red;
  section {
    padding: 10px 0 10px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`


const MainTitle = styled.h1`
  ${font({fMax: 27, fMin: 20})};
  outline: 1px solid red;
`


const SmallText = styled.span`
  ${font({fMax: 14, fMin: 14})};
  ${font({fMax: 14, fMin: 14})};
  outline: 1px solid red;
`

const Name = styled.h2`
  ${font({family: 'Josefin Sans, sans-serif', weight: 700, fMax: 50, fMin: 36})};

  letter-spacing: 0.05px;
  margin: 10px 0;
  outline: 1px solid red;
  

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

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

  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before {
    content: '';
    display: inline-block;

    position: absolute;
    width: 360px;
    height: 470px;
    border: 5px solid ${theme.colors.accent};
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 314px;
      height: 414px;
      top: -17px;
      left: 20px;
    }
  }
`

