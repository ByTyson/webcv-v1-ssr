import React, {FC} from "react";
import {HobbiesS} from "./Hobbies.style";
import data from "../../data/data";
import HobbyCard from "../hobbycard/HobbyCard";

type hobbyType = {
    titleHobbies: string;
}

const Hobbies:FC<hobbyType> = (props) => {

    const{titleHobbies} = props

    return (
        <HobbiesS>
            <div className="title">
                <h1>{titleHobbies}</h1>
            </div>
            <div className="listHobbies">
                {data.hobbies.map((hobbie: { hobbyName: string; hobbyDesc: string; hobbyIcon: string;}, index) => {
                    return (
                        <HobbyCard hobbyName={hobbie.hobbyName} hobbyIcon={hobbie.hobbyIcon} hobbyDesc={hobbie.hobbyDesc} key={index}/>
                    )}
                )}
            </div>
        </HobbiesS>
    )
}

export default Hobbies