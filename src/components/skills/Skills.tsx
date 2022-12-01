import React, {FC} from "react";

import {SkillS} from "./Skills.style";
import SkillCard from "../skillcard/SkillCard";
import data from "../../data/data";

type skillType = {
    titleSkill: string
}

const Skill:FC<skillType> = (props) => {

    const{titleSkill}=props

    return (
        <SkillS>
            <div className="title">
                <h1>{titleSkill}</h1>
            </div>
            <div className="listSkills">
                {data.skills.map((skill: { skillName: string; skillIcon: string; skillDesc: string; }, index) => {
                    return (
                        <SkillCard skillName={skill.skillName} skillIcon={skill.skillIcon} skillDesc={skill.skillDesc} key={index}/>
                    )}
                )}
            </div>
        </SkillS>
    )
}

export default Skill