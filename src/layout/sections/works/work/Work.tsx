import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/links/Links";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";


type WorkPropsType = {
    title?: string
    text?: string
    button?: string
    src?: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <ImageWork src={props.src}/>
                <Button>view project</Button>
            </ImageWrapper>

            <Description>
                <TitleWork title={props.title}>{props.title}</TitleWork>
                <TextWork text={props.text}>{props.text}</TextWork>
                <Link>demo</Link>
                <Link>Code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
  background-color: ${theme.colors.secondaryBg};

  ${Link} {
    padding: 10px 0;

    text-transform: uppercase;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div `
  position: relative;

  &:hover {
    &::before {
      content: "";
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);

      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }

    ${Button} {
      opacity: 1;
    }

  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &::before {
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`

const TitleWork = styled.h3 <WorkPropsType>`

`

const TextWork = styled.p <WorkPropsType>`
  margin: 14px 0 20px;
`

const ImageWork = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
  padding: 25px 20px;
`