import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {Work} from "./work/Work";
import imageWork1 from '../../../assets/images/Social_Network.webp'
import imageWork2 from '../../../assets/images/timer.webp'
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"
import {AnimatePresence, motion} from "framer-motion"


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
    type:"spa",
    id: 1
  },
  {
    title: "Timer",
    src: imageWork2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    type:"react",
    id: 2
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

                  <AnimatePresence>
                  {filterWorks.map((w, index)=> {
                    return (
                        <motion.div
                          style={{ width: "330px", flexGrow: 1,  maxWidth: "540px"}}
                          layout={true}
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          exit={{opacity: 0}}
                          key={w.id}
                        >
                          <Work title={w.title}
                                key={w.id}
                                src={w.src}
                                text={w.text}
                          />
                        </motion.div>
                    )
                  })}
                  </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



