import React, { useState } from 'react';
import News from './MainNews';
import setup from '../../Img/setup.jpg'

function SmallNews() {

    // initialisation du nombre d'articles
    const [more,setMore] = useState(7);
    const [nbItems,setNbItems] = useState(0); 

    function getNbItems(items)
    {
        // récuperation et initialisation du nb max
        setNbItems(items.length)
    }
    
    function showMore()
    {
        let nb=nbItems-more
        //pour un affichage par 3 choix arbitraire
        if(nb<3)
        {
            // blocage à la taille max du tableau
            setMore(more+(nbItems-more))
        }
        else
        setMore(more+3)
    }

    // création du tableau
    const articles = [];
    for (let i = 4; i < more; i++) {
        articles.push(
            <>
                <div style={{ marginTop: '1%', marginBottom: '1%', justifyContent: 'center', alignItems: 'center' }}>
                    {/* <img style={{ width: '20%', borderRadius: 10 }} src={setup} alt="article" /> */}
                    {/* affichage des articles de 4 à more et passage des props id et description */}
                    <News id={i} description={false} home={false} getNbItems={(items) => getNbItems(items)} />
                </div>
                <hr style={{ backgroundColor: 'grey',  marginRight: '10%', height: "0.05px", marginBottom: '1%' }} />
            </>
        )

    }
    return (
        <div style={{marginLeft:'10%'}}>
            {/*  affichage du tableau */}
            {articles}
            <div style={{justifyContent:'center', alignItems: 'center',display:'flex',marginBottom:'10%',marginTop:'5%'}}>
                {/*button pour ajouter des News*/}
                <button onClick={()=> showMore()} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center',width:100 }}>Voir plus</button>
            </div>
        </div>
    );
}

export default SmallNews;
