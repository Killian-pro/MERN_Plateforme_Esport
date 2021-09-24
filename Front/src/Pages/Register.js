import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Connexion() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [streamLink, setStreamLink] = useState('');
    const [backgroundImage, setBackgroundImage] = useState('https://cdn.icon-icons.com/icons2/2200/PNG/512/gamer_avatar_icon_133991.png');
    const [nextEtape, setNextEtape] = useState(false);
    const [showLink, setShowLink] = useState(false);


    function sendvalue() {
        const values = { firstName: firstName , lastName: lastName ,password:password ,mail :email ,pseudo : pseudo ,avatar :backgroundImage ,streamUrl:streamLink }
        axios.post('http://localhost:9000/Player', values)
        history.push("/");
    }

    return (
        <div style={{ backgroundImage: "linear-gradient(to right, #E92EFB, #04005E)", justifyContent: 'center', alignItems: 'center', display: 'flex', height: "100vh" }}>
            {nextEtape == false ? <div style={{ backgroundColor: 'white', width: 500, height: 400, borderRadius: "5%" }}>
                <h1 style={{ textAlign: 'center' }}>Sign up</h1>
                <div style={{ margin: 25 }}>
                    <div style={{ display: 'flex' }}>
                        {/* <div style={{ margin: 10, fontWeight: 'bold',color:"#696969" }}>Email</div> */}
                        <input
                            style={{ width: "90%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                            placeholder={"First Name *"}
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        {/* <div style={{ margin: 10, fontWeight: 'bold',color:"#696969" }}>Email</div> */}
                        <input
                            style={{ width: "90%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                            placeholder={"Last Name *"}
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                            placeholder={"Email *"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        {/* <div style={{ margin: 10, fontWeight: 'bold',color:"#696969" }}>Password</div> */}
                        <input
                            style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                            placeholder={"Password *"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button onClick={() => { setNextEtape(true) }} style={{
                        backgroundColor: '#333333', borderWidth: 2, borderStyle: 'solid', borderRadius: 5, height: 50, marginLeft: 10, marginTop: 30,
                        color: 'white', fontWeight: 'bold', textAlign: 'center', width: "95%"
                    }}>
                        Next
                    </button>
                </div>
            </div> :
                <div style={showLink == true ? {height:500}: {height:450},{ backgroundColor: 'white', width: 500,  borderRadius: "5%" }}>
                    <h1 style={{ textAlign: 'center' }}>Bienvenue {firstName} {lastName} </h1>
                    <div style={{ margin: 25 }}>
                        <div style={{ textAlign: 'center' }}>
                            <button onClick={() => { setShowLink(true) }} style={{ borderWidth: 0.5, borderColor: '#A4A4A4', borderRadius: 35,alignContent:'center', backgroundColor: 'transparent' }}><img src={backgroundImage} style={{ width: 55, height: 55,borderRadius: 35 }} /></button>
                            <div style={{ fontWeight: 'bold', color: "#696969", textAlign: 'center' }}>Ajoute ton</div>
                            <div style={{ marginBottom: 10, fontWeight: 'bold', color: "#696969", textAlign: 'center' }}>Avatar</div>
                            {showLink && <input
                                style={{ width: "92%",color:'#696969', borderRadius: 5, margin: 10, height: 20, borderColor: '#A4A4A4', padding: 5 }}
                                placeholder={"Link URL avatar"}
                                // value={fakeUrl}
                                onChange={e => setBackgroundImage(e.target.value)}
                            />}
                        </div>
                        <div>
                            <input
                                style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                placeholder={"Pseudo *"}
                                value={pseudo}
                                onChange={e => setPseudo(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                style={{ width: "92%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4', padding: 5 }}
                                placeholder={"Stream url"}
                                value={streamLink}
                                onChange={e => setStreamLink(e.target.value)}
                            />
                        </div>
                        <button onClick={() => { sendvalue()}} style={{
                            backgroundColor: '#333333', borderWidth: 2, borderStyle: 'solid', borderRadius: 5, height: 50, marginLeft: 10, marginTop: 30,
                            color: 'white', fontWeight: 'bold', textAlign: 'center', width: "95%"
                        }}>
                            Finish
                        </button>
                    </div>
                </div>}
        </div>
    );
}

export default Connexion;
