import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";

function Connexion() {
    let history = useHistory();
    const [user, setUser] = useState({})
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [invalid, setInvalid] = useState(false)



    useEffect(() => {
        if(user)
        if (Object.keys(user).length) {
            setInvalid(false)
            localStorage.setItem('id', user._id);
            history.push("/");
        }
    }, [user])

    function sendvalue()
    {   
        axios.get('http://localhost:9000/Player', {
            params: {
                Email: email,
                Password: password,
            }}).then(res => setUser(res.data))
            setInvalid(true)
    }
    return (
        <div style={{  backgroundImage: "linear-gradient(to right, #E92EFB, #04005E)", justifyContent: 'center', alignItems: 'center', display: 'flex', height: "100vh" }}>
            <div style={{ backgroundColor: 'white', width: 500, height: 450,borderRadius:"5%"}}>
                <h1 style={{ textAlign: 'center' }}>Log in</h1>
                <div style={{ margin: 25 }}>
                    <div>
                        <div style={{ margin: 10, fontWeight: 'bold',color:"#696969" }}>Email</div>
                        <input
                            style={{ width: "90%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4',padding:5 }}
                            placeholder={"Enter email"}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <div style={{ margin: 10, fontWeight: 'bold',color:"#696969" }}>Password</div>
                        <input
                            style={{ width: "90%", fontWeight: 'bold', borderRadius: 5, margin: 10, height: 30, borderColor: '#A4A4A4',padding:5 }}
                            placeholder={"Enter Password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    {invalid && <div style={{color:'red'}}> Utilisateur non existant </div>}
                    <button onClick={() => { sendvalue()}} style={{ backgroundColor: '#333333', borderWidth: 2, borderStyle: 'solid', borderRadius: 5, height: 50, marginLeft: 10, marginTop: 50,
                     color: 'white', fontWeight: 'bold', textAlign: 'center', width: "93%" }}>
                        Sign in
                    </button>
                    <div style={{display:'flex',justifyContent:'flex-end',marginTop:10,marginRight:"5%",color:"#696969"}}>Forgot
                    <div style={{marginLeft:2,color:'#04005E'}}>password?</div></div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;
