import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
    ${font({family: "Josefin Sans, sans-serif", weight: 700, fMax: 22, fMin: 16})}

    letter-spacing: 3px;
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
`

const SociaItem = styled.li`
  list-style: none;
  margin: 30px 0 30px;
`

const SocialLink = styled.a`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.accent};
  transition: ${theme.animations.transition};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  opacity: 0.5;
`

export const S = {
  Footer,
  Name,
  SocialList,
  SociaItem,
  SocialLink,
  Copyright
}
