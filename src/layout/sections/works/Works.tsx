import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TabMenu} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import imageWork1 from '../../../assets/images/Social_Network.webp'
import imageWork2 from '../../../assets/images/timer.webp'
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"

const worksItems = ['All', 'landing page', 'React', 'spa']

const workData = [
  {
    title: "Social Network",
    src: imageWork1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    title: "Timer",
    src: imageWork2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItem={worksItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={"wrap"}>

                  {workData.map((w, index)=> {
                      return <Work title={w.title} key={index}
                                   src={w.src}
                                   text={w.text}/>
                  })}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



