import React from 'react'
import {
    Link
} from "react-router-dom";

function GameLinkSimple(props) {
    return (
        <div>
            <Link to={props.link}>
                <img style={{ width: 450,height:240, margin: 10, borderRadius: 25 }} src={props.image} alt={props.name} />
            </Link>
        </div>
    );
}

export default GameLinkSimple;
