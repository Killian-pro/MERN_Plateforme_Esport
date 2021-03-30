import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import Menu from '../Component/Menu';
import News from '../Component/MainNews';
import setup from '../Img/setup.jpg'

function MediumActualite() {

    const articles = [];
    for (let i = 1; i < 4; i++) {
        articles.push(
        <div style={{width:400,marginTop:'5%',marginBottom:'5%',marginRight:'5%', justifyContent:'center',alignItems:'center'}}>
            <img style={{width:'100%' ,borderRadius:10}} src={setup} alt="article" />
            <News id={i} />
        </div>)

    }
    return (
        <div style={{marginLeft:'10%'}}>
            <div style={{flexDirection:'row',display:'flex',marginRight:'10%'}}>
            {articles}
            </div>
            <hr style={{backgroundColor: 'grey',marginLeft:'10%',marginRight:'10%',height:"0.05px"}}/>
        </div>
    );
}

export default MediumActualite;
