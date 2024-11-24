import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {IconWrapper} from "../../../../components/IconWrapper";


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
  padding: 62px 20px 40px;

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



