import React from 'react';
import {Link} from "../../../../components/links/Links";
import {Button} from "../../../../components/Button";
import {S} from "../Works_Styles"


type WorkPropsType = {
    title?: string
    text?: string
    button?: string
    src?: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.ImageWork src={props.src}/>
                <Button>view project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.TitleWork>{props.title}</S.TitleWork>
                <S.TextWork>{props.text}</S.TextWork>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>Code</Link>
            </S.Description>
        </S.Work>
    );
}


