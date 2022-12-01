import React, {FC} from "react";
import { Icon } from "@iconify/react";
import {HobbyCardS} from "./HobbyCard.style";

type hobbycardType = {
    hobbyName: string;
    hobbyDesc: string;
    hobbyIcon: string;
}

const HobbyCard:FC<hobbycardType> = (props) => {

    const{hobbyName, hobbyDesc, hobbyIcon} = props

    return(
        <HobbyCardS>
            <div>
                <Icon icon={hobbyIcon} style={{ fontSize: '35px' }} />
                <h3>{hobbyName}</h3>
                <p>{hobbyDesc}</p>
            </div>
        </HobbyCardS>
    )
}
export default HobbyCard