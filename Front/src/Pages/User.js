import React, {useEffect, useState} from "react";
import axios from 'axios'
import Menu from "../Component/Menu";

function Connexion() {
    const [user, setUser] = useState({})

    useEffect(() => {
        sendvalue()
    }, [])


    function sendvalue() {
        axios.get('http://localhost:9000/PlayerWithID', {
            params: {
                _id: localStorage.getItem('id')
            }
        }).then(res => setUser(res.data))
    }

    return (
        <div>
            <Menu/>
            <div style={{backgroundImage: "linear-gradient(to right, #E92EFB, #04005E)", justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <div style={{backgroundColor: 'white', width: 900, height: '90vh'}}>
                    <h1 style={{textAlign: 'center'}}>Mes infos</h1>
                    <div style={{margin: 25}}>
                        <div>firstname : {user?.firstName}</div>
                        <div>lastName : {user?.lastName}</div>
                        <div>email : {user?.mail}</div>
                        <div>pseudo : {user?.pseudo}</div>
                        <div> stream : {user?.streamUrl}</div>
                        <div>password : {user?.password} </div>
                    </div>
                    <h1 style={{textAlign: 'center'}}>Ma Team</h1>
                    <div style={{margin: 25}}>
                        {localStorage.getItem('id') ? <button>Créer une équipe</button> :
                            <button disabled>Créer une équipe</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;