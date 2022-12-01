
import { FC } from "react";
import { Icon } from "@iconify/react";
import { ProjectsCardS } from "./ProjectCard.style";

type projectcardType = {
    projectName: string;
    projectDesc: string;
    projectIcon: string;
    projectLangage: string;
    projectLink: string;

}

const ProjectsCard: FC<projectcardType> = (props) => {

    const { projectName, projectDesc, projectIcon, projectLangage, projectLink } = props

    return (
        <ProjectsCardS>
            <a href={projectLink}>
                <div>
                    <Icon icon={projectIcon} style={{ fontSize: '35px' }} />
                    <h3>{projectName}</h3>
                    <p>{projectDesc}</p>
                    <p id="langage">{projectLangage}</p>
                </div>
            </a>
        </ProjectsCardS>
    )
}
export default ProjectsCard
