import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Skill = styled.div`
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

const Skills = styled.section`
  position: relative;
`

export const S = {
  Skill,
  SkillTitle,
  SkillText,
  Skills
}