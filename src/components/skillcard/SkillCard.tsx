import React, {FC} from "react";
import {SkillCardS} from "./SkillCard.style";
import { Icon } from "@iconify/react";

type skillcardType = {
    skillName: string;
    skillDesc: string;
    skillIcon: string;
}

const SkillCard:FC<skillcardType> = (props) => {

    const{skillName, skillDesc, skillIcon} = props

    return(
        <SkillCardS>
            <div>
                <Icon icon={skillIcon} style={{ fontSize: '35px' }} />
                <h3>{skillName}</h3>
                <p>{skillDesc}</p>
            </div>
        </SkillCardS>
    )
}
export default SkillCard