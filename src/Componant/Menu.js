import React, { Component } from 'react';
import '../Style/News.css';
import {
    Link
  } from "react-router-dom";

function Menu() {
    return (
        <div style={{display: 'flex', flexdirection : 'row', justifyContent:'flex-start',marginLeft:"7%"}}>
            <h2 style={{marginRight:100}}>What's the game</h2>
            <div style={{margin:28,marginRight:10}}>
            <Link style={{color:'#827878' ,textDecoration:'none',fontWeight:'bold',fontSize:12}} to="/">ACCUEIL</Link>
            </div>
            <div style={{margin:28,marginRight:10}}>
            <Link style={{color:'#827878',textDecoration:'none',fontWeight:'bold',fontSize:12}} to="/Actualites">ACTUALITES</Link>
            </div>
            <div style={{margin:28,marginRight:10}}>
            <Link style={{color:'#827878',textDecoration:'none',fontWeight:'bold',fontSize:12}} to="/Stats">STATISTIQUES</Link>
            </div>
            <div style={{margin:28,marginRight:10}}>
            <Link style={{color:'#827878',textDecoration:'none',fontWeight:'bold',fontSize:12}} to="/Recrutment">RECRUTEMENT</Link>
            </div>
            <div style={{margin:28,marginRight:100}}>
            <Link style={{color:'#827878',textDecoration:'none',fontWeight:'bold',fontSize:12}} to="/Streams">STREAMS</Link>
            </div>
            <div style={{margin:23,marginRight:5 ,borderColor:'#F17B15',borderWidth:2,borderStyle:'solid',borderRadius:5,padding:5 ,paddingTop:3}}>
            <Link style={{color:'#F17B15',textDecoration:'none',fontWeight:'bold',fontSize:12}} to="/Connexion">CONNEXION</Link>
            </div>
            <div style={{margin:23 ,borderColor:'#440BD4',backgroundColor:'#440BD4',borderWidth:2,borderStyle:'solid',borderRadius:5,padding:5,paddingTop:3}}>
            <Link style={{color:'white',textDecoration:'none',fontWeight:'bold',fontSize:12}} to="/Inscription">S'INSCRIRE GRATUITEMENT</Link>
            </div>
        </div>
        );
}
export default Menu;
