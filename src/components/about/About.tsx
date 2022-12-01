import React, {FC} from "react";

import {AboutS} from "./About.style";

type aboutType = {

        title: string ;
        description: string ;

}

const About:FC<aboutType> = (props) => {


    const{title, description} = props

    return (
        <AboutS>
            <h1>{title}</h1>
            <p>{description}</p>
        </AboutS>
    )
}

export default About;

