import React, {useEffect, useState} from "react";
import axios from 'axios'

function Connexion() {
    const [user, setUser] = useState({})

    useEffect(() => {
        sendvalue()
    }, [])


    function sendvalue()
    {   
        axios.get('http://localhost:9000/PlayerWithID', {
            params: {
                _id: localStorage.getItem('id')
            }}).then(res => setUser(res.data))
    }
    return (
        <div style={{ backgroundImage: "linear-gradient(to right, #E92EFB, #04005E)", justifyContent: 'center', alignItems: 'center', display: 'flex', height: "100vh" }}>
            <div style={{ backgroundColor: 'white', width: 900, height: 900, borderRadius: "5%" }}>
                <h1 style={{ textAlign: 'center' }}>Mes infos</h1>
                <div style={{ margin: 25   }}>
                    <div>firstname : {user?.firstName}</div>
                    <div>lastName : {user?.lastName}</div>
                    <div>email : {user?.mail}</div>
                    <div>pseudo : {user?.pseudo}</div>
                    <div> stream : {user?.streamUrl}</div>
                    <div>password : {user?.password} </div>
                </div>
                <h1 style={{ textAlign: 'center' }}>Ma Team</h1>
                <div style={{ margin: 25   }}>
                <button>Creation de ma TEAM</button>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
