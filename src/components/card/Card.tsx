import React, {FC} from "react";
import {CardS} from "./Card.style";
import face from "../../assets/img/face.jpg"
import { Icon } from "@iconify/react";
import {colors} from "../../constant/style";

type cardType = {

    name: string ;
    title: string ;
    social: {
        github: string ;
        linkdin: string;
        email: string;
    }
}

const Card:FC<cardType> = (props) => {

    const{name, title, social} = props
    const{github, linkdin, email} = social

    return (
        <CardS>
            <div>
                <img src={face} alt=""/>
            </div>
            <div className="separator">
                <h2>{name}</h2>
                <h4>{title}</h4>
            </div>
            <div className="link">
                <a href={"mailto:"+email} className="mail">
                    <Icon icon="ci:mail" style={{ fontSize: '25px', color:colors.mail}}/>
                </a>
                <a href={linkdin}>
                    <Icon icon="fa-brands:linkedin" style={{ fontSize: '25px', color:colors.linkdin}}/>
                </a>
                <a href={github}>
                    <Icon icon="bytesize:github" style={{ fontSize: '25px', color:colors.github}}/>
                </a>
            </div>
        </CardS>
    )
}

export default Card;

