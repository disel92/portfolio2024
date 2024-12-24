import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles"


const socialItemData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "link"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer id={"footer"}>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <S.Name>Dmitry</S.Name>
                    <S.SocialList>

                        {socialItemData.map((s, index)=> {
                            return <S.SociaItem key={index}>
                                <S.SocialLink>
                                        <Icon height={"21px"}
                                              width={"21px"}
                                              viewBox={"0 0 21px 21px"}
                                              iconId={s.iconId}
                                              />
                                </S.SocialLink>
                            </S.SociaItem>
                        })}

                </S.SocialList>
                <S.Copyright>© 2024 Dmitry Gurenko, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </Container>
</S.Footer>
);
}

