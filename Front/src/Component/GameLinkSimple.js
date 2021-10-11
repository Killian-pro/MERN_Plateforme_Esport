import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

function GameLinkSimple(props) {
    const [width, setWidth] = useState(450)
    const [height, setHeight] = useState(240)

    return (
        <div>
            <Link  onMouseEnter={()=>{setWidth(500);setHeight(290)}} onMouseLeave={()=>{setWidth(450);setHeight(240)}} to={props.link}>
                <img style={{ width: width,height:height, margin: 10, borderRadius: 25 }} src={props.image} alt={props.name} />
            </Link>
        </div>
    );
}

export default GameLinkSimple;
