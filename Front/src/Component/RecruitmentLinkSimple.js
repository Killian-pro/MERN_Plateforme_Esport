import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

function RecruitmentLinkSimple(props) {

    const [width, setWidth] = useState(600)
    const [height, setHeight] = useState(400)

    return (
        <div>
            <Link to={props.link} onMouseEnter={()=>{setWidth(650);setHeight(450)}} onMouseLeave={()=>{setWidth(600);setHeight(400)}}>
                <img style={{ width: width,height:height, margin: 50, borderRadius: 25 }} src={props.image} alt={props.name} />
            </Link>
        </div>
    );
}

export default RecruitmentLinkSimple;
