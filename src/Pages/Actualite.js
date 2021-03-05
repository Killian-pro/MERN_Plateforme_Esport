import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Menu from '../Componant/Menu';
import News from '../Componant/MainNews';
import setup from '../Img/setup.jpg'

function Actualite() {

    const articles = [];
    for (let i = 0; i < 20; i++) {
        articles.push(<div className="containerNews">
            <News id={i} />
        </div>)

    }
    return (
        <div>
            <Menu/>
            <div style={{marginBottom:'20%'}}></div>
            <div style={{display: 'flex', flexdirection : 'row', justifyContent:'center',alignItems:'center',margin:'10%'}}>
                <img style={{width:'40%' ,borderRadius:10}} src={setup} alt="article" />
                <div> <News id={0} /></div>
            </div>
            {/* {articles} */}
        </div>
    );
}

export default Actualite;
