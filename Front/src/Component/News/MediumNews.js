import React from 'react';
import News from './MainNews';
import setup from '../../Img/setup.jpg'

function MediumNews() {

    // Tableau temporaire "articles"
    const articles = [];
    for (let i = 1; i < 4; i++) {
        articles.push(
            // affichage des articles 2 à 4
            <div style={{ width: 400, marginTop: '5%', marginBottom: '5%', marginRight: '5%', justifyContent: 'center', alignItems: 'center' }}>
                {/* <img style={{ width: '100%', borderRadius: 10 }} src={setup} alt="article" /> */}
                {/* passage de l'index en props */}
                <News id={i} />
            </div>)

    }
    return (
        <div style={{ marginLeft: '10%' }}>
            <div style={{ flexDirection: 'row', display: 'flex', marginRight: '10%' }}>
                {/* affichage du tableau */}
                {articles}
            </div>
            {/* bar de séparation */}
            <hr style={{ backgroundColor: 'grey', marginRight: '10%', height: "0.05px" }} />
        </div>
    );
}

export default MediumNews;
