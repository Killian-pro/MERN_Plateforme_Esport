import React, {useEffect, useState} from "react";
import Menu from '../Component/Menu';
import '../Style/Statistiques.css';
import Footer from "../Component/Footer";
import axios from "axios";
import logo from '../Img/logo.gif'
import { Link } from "react-router-dom";

function Players() {
const [allPlayer, setAllPlayer] = useState([])

useEffect(() => {
    getPlayer()
}, [])

function getPlayer() {
    axios.get('http://localhost:9000/Players/all', {})
        .then(res => setAllPlayer(res.data))
}
    return (
        <div>
            <Menu />
            <div style={{flexDirection:'row',justifyContent:'center',display:'flex',margin :20}}>
            {allPlayer.map(it =>
                <Link to={{ pathname: `/PlayerRecrutement/${it._id}`,  id : it}} style={{flexDirection:'column' ,display:'flex',alignItems:'center',borderWidth:1,borderColor:'black',borderStyle:'solid',margin:5,borderRadius:5,textDecoration:'none'}}>
                    {it.avatar ? <img style={{ width: 80, height: 80,margin:5 }} src={it.avatar} alt="ico" /> :  <img style={{ width: 80, height: 80,margin:5 }} src={logo} alt="ico" />}
                    <b style={{color:'black'}}>{it.pseudo}</b>
                    {console.log(it)}
                </Link>)}
                </div>
            <Footer />
        </div>
    );
}

export default Players;