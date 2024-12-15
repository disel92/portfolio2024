import React from 'react';
import photo from '../../../assets/images/Kitten-running-jump-wildflowers_iphone_640x960.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"


export const Main:React.FC = () => {
    return (

        <S.Main>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <section>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Gurenko Dmitry</span>
                        </S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </section>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt='foto'/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
}

