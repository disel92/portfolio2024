import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {IconWrapper} from "../../../../components/IconWrapper";
import {theme} from "../../../../styles/Theme";


type SkillPropsType = {
    iconId: string
    title: string
    text: string
}

export const Skill = (props: SkillPropsType) => {
    return (

        <StyledSkill>
            <FlexWrapper direction={'column'} align={'center'}>
                <IconWrapper>
                    <Icon iconId={props.iconId}/>
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>

    );
};

const StyledSkill = styled.div`
  width: 380px;
  flex-grow: 1;
  padding: 43px 20px 54px;
  
  @media ${theme.media.mobile} {
    padding: 30px 0 40px;
  }

`

const SkillTitle = styled.h3`

  font-family: Josefin Sans, sans-serif;
  line-height: 16px;
  margin: 70px 0 15px;
  text-transform: uppercase;
`

const SkillText = styled.p`
  text-align: center;
`

// export const IconWrapper = styled.div`
//
// `



