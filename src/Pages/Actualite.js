import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Menu from '../Componant/Menu';
import News from '../Componant/MainNews';
import setup from '../Img/setup.jpg'
import footer from '../Img/footer.png'
import MediumActualite from './MediumActualite'
import SmallActualite from './SmallActualite'

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
            <div style={{display: 'flex', flexdirection : 'row', justifyContent:'center',alignItems:'center',marginLeft:'10%',marginRight:'10%',marginTop:'5%',marginBottom:'5%'}}>
                <img style={{width:'40%' ,borderRadius:10}} src={setup} alt="article" />
                <div> <News id={0} /></div>
            </div>
            <hr style={{backgroundColor: 'grey',marginLeft:'10%',marginRight:'10%',height:"0.05px"}}/>
            {/* {articles} */}
            <MediumActualite/>
            <SmallActualite/>
            <img style={{ width: '100%'}} src={footer} alt="footer" />
        </div>
    );
}

export default Actualite;
