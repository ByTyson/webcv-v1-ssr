// import react and Functional component
import React, { FC } from "react";

//import stylized components
import { HomeS } from "./Home.style";
import Card from "../../components/card/Card";
import About from "../../components/about/About";
import Skill from "../../components/skills/Skills";
import Hobbies from "../../components/hobbies/Hobbies";
import Projects from "../../components/projects/Projects";

//import data for complete the props
import data from "../../data/data";
import DomaineName from "../../components/domainename/DomaineName";

//import AOS fro JS animation
import AOS from 'aos';
import 'aos/dist/aos.css';



//Define the props of the mother component
type homeType = {}

AOS.init({});

//define the component
const Home: FC<homeType> = () => {
    return (
        <HomeS>
            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <div >
                    <Card name={data.name} title={data.desc} social={data.social} />
                </div>
                <div >
                    <About title={data.about.title} description={data.about.description} />
                </div>
                <div >
                    <Skill titleSkill={data.titleSkill} />
                </div>
                <div >
                    <Hobbies titleHobbies={data.titleHobby} />
                </div>
                <div >
                    <Projects titleProjects={data.titleProject} />
                    <DomaineName domaineName={data.domaineName} />
                </div>
            </div>
        </HomeS>
    )
}

export default Home;