import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {Container} from "../../components/Container";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Name>Dmitry</Name>
                    <SocialList>
                        <SociaItem>
                            <SocialLink>
                                <Icon height={'21px'}
                                      width={'21px'}
                                      viewBox={'0 0 21px 21px'}
                                      iconId={'instagram'}/>
                            </SocialLink>
                        </SociaItem>
                        <SociaItem>
                            <SocialLink>
                                <Icon height={'21px'}
                                      width={'21px'}
                                      viewBox={'0 0 21px 21px'}
                                      iconId={'telegram'}/>
                            </SocialLink>
                        </SociaItem>
                        <SociaItem>
                            <SocialLink>
                                <Icon height={'21px'}
                                      width={'21px'}
                                      viewBox={'0 0 21px 21px'}
                                      iconId={'vk'}/>
                            </SocialLink>
                        </SociaItem>
                        <SociaItem>
                            <SocialLink>
                                <Icon height={'21px'}
                                      width={'21px'}
                                      viewBox={'0 0 21px 21px'}
                                      iconId={'link'}/>
                            </SocialLink>
                        </SociaItem>
                </SocialList>
                <Copyright>© 2024 Dmitry Gurenko, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </Container>
</StyledFooter>
)
    ;
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`

const Name = styled.span`
  font-family: Josefin Sans, sans-serif;
  font-size: 22px;
  font-weight: 700;
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