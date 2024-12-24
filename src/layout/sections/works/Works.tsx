import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import imageWork1 from '../../../assets/images/Social_Network.webp'
import imageWork2 from '../../../assets/images/timer.webp'
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"


const tabsItems: Array<{status: TabsStatusType, title: string}> = [
  {
    title: "All",
    status: "all"
  },
  {
    title: "landing page",
    status: "landing"
  },
  {
    title: "React",
    status: "react"
  },
  {
    title: "spa",
    status: "spa"
  },
]


const worksData = [
  {
    title: "Social Network",
    src: imageWork1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type:"spa"
  },
  {
    title: "Timer",
    src: imageWork2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type:"react"
  }
]

export const Works: React.FC = () => {

   const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
  let filterWorks = worksData
  if (currentFilterStatus === "landing") {
    filterWorks = worksData.filter(work => work.type === "landing")
  }
  if (currentFilterStatus === "react") {
    filterWorks = worksData.filter(work => work.type === "react")
  }
  if (currentFilterStatus === "spa") {
    filterWorks = filterWorks.filter(work => work.type === "spa")
  }
  //засетать в setCurrentFilterStatus, чтобы react перерисовал

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value)
  }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={"wrap"}>

                  {filterWorks.map((w, index)=>
                    <Work title={w.title}
                          key={index}
                          src={w.src}
                          text={w.text}/>
                  )}

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



