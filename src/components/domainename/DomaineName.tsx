import React, { FC } from "react";
import { DomaineNameS } from "./DomaineName.style";

type domaineNameType = {
    domaineName: string;
}

const DomaineName: FC<domaineNameType> = (props) => {
    const { domaineName } = props

    return (
        <DomaineNameS>
            <a href="https://www.sltr.fr"><p>{domaineName}</p></a>
        </DomaineNameS>

    )

}

export default DomaineName