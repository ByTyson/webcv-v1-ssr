import { FC } from "react";
import data from "../../data/data";
import { Icon } from "@iconify/react";
import ProjectsCard from "../projectcard/ProjectCard";
import { ProjectsS } from "./Projects.style"



type projectsType = {
    titleProjects: string;
}

const Projects: FC<projectsType> = (props) => {

    const { titleProjects } = props

    return (
        <ProjectsS>
            <div className="title">
                <h1>{titleProjects}</h1>
            </div>
            <div className="listProjects">

                {data.projects.map((project: { projectName: string; projectDesc: string; projectIcon: string; projectLangage: string; projectLink: string; }, index) => {
                    return (
                        <ProjectsCard projectName={project.projectName} projectIcon={project.projectIcon} projectDesc={project.projectDesc} projectLangage={project.projectLangage} projectLink={project.projectLink} key={index} />
                    )
                }
                )}
            </div>
        </ProjectsS>
    )
}

export default Projects


