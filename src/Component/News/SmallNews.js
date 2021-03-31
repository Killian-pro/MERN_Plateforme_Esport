import React, { Component, useState } from 'react';
import News from './MainNews';
import setup from '../../Img/setup.jpg'

function SmallNews() {

    // initialisation du nombre d'articles
    const [more,setMore] = useState(7);

    function addMore()
    {
        let nb = more;
        setMore(nb+3);
    }

    // création du tableau
    const articles = [];
    for (let i = 4; i < more; i++) {
        articles.push(
            <>
                <div style={{ marginTop: '1%', marginBottom: '1%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img style={{ width: '20%', borderRadius: 10 }} src={setup} alt="article" />
                    {/* affichage des articles de 4 à more et passage des props id et description */}
                    <News id={i} description={false} />
                </div>
                <hr style={{ backgroundColor: 'grey', marginLeft: '10%', marginRight: '10%', height: "0.05px", marginBottom: '1%' }} />
            </>
        )

    }
    return (
        <div style={{marginLeft:'10%'}}>
            {/*  affichage du tableau */}
            {articles}
            <div style={{justifyContent:'center', alignItems: 'center',display:'flex',marginBottom:'10%',marginTop:'5%'}}>
                {/*  */}
                <button onClick={()=> addMore()} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center',width:100 }}>Voir plus</button>
            </div>
        </div>
    );
}

export default SmallNews;
