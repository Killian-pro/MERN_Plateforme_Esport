import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";

function PlayerCard(props) {
    return (
        <div style={{ justifyContent: 'center', textAlign: 'center', boxShadow: "1px 1px 1px 2px #9E9E9E", borderRadius: 25, margin: 15 }}>
            {/* <Link style={{ textDecoration: 'none' }} to={{ pathname: `/sous-taches/${item.id}`, idTask: item.id }}> */}
            <Link style={{ textDecoration: 'none' }} to={{ pathname: `/PlayerRecrutement/${'KIP'}`, name: 'KIP' }}>
                <img style={{ width: 200, height: 150, margin: 10, borderRadius: 25 }} src={"https://seek-team-prod.s3.fr-par.scw.cloud/users/5f5f1042930ba372016786.jpg"} alt={props.name} />
                <div style={{ fontWeight: 'bold' }}>KIP</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ borderWidth: 3, borderStyle: 'solid', padding: 15, flex: 1, borderBottomLeftRadius: 25 }}>POST</div>
                    <div style={{ borderWidth: 3, borderStyle: 'solid', padding: 15, flex: 1, borderBottomRightRadius: 25 }}>RANK</div>
                </div>
            </Link>  
        </div>
    );
}

export default PlayerCard;
