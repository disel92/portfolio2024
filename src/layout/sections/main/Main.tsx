import React from 'react';
import photo from '../../../assets/images/Kitten-running-jump-wildflowers_iphone_640x960.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';


export const Main: React.FC = () => {
  return (

    <S.Main id={"home"}>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
          <section>
            <S.SmallText>Hi There</S.SmallText>
            <S.Name>I am <span>Gurenko Dmitry</span>
            </S.Name>
            <S.MainTitle>
              <p>A Web Developer.</p>
              <Typewriter
                options={{
                  strings: ['A Web Developer.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.MainTitle>
          </section>
            <Tilt>
              <S.PhotoWrapper>
              <S.Photo src={photo} alt='foto'/>
              </S.PhotoWrapper>
            </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
}

