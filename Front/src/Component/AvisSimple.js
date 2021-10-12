import React from 'react'

function AvisSimple(props) {
    return (
        <div style={{ alignContent: 'center', boxShadow: "0 2px 2px 0px #9E9E9E", borderRadius: 25, padding: 15,width:400, marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
            <div style={{ borderWidth: 30, alignItems: 'center', textAlign: 'center', color: "#585555" }}>
                {props.text}
            </div>
            <div style={{ textAlign: 'center' }}>
                <img style={{ width: '15%', margin: 10 }} src={props.logo} alt="Logo" />
            </div>
            <div style={{ textAlign: 'center', color: '#440BD4', fontWeight: 'bold' }}>
                {props.pseudo}
             </div>
            <div style={{ textAlign: 'center', color: '#F17B15', fontWeight: 'bold', fontSize: '90%' }}>
                {props.team}
             </div>
        </div>
    );
}

export default AvisSimple;
