import React, { Component } from 'react';
import Menu from '../Component/Menu';
import MainNews from '../Component/News/MainNews';
import setup from '../Img/setup.jpg'
import footer from '../Img/footer.png'
import MediumActualite from '../Component/News/MediumNews'
import SmallActualite from '../Component/News/SmallNews'
    
function Actualite() {
    
    return (
        <div>
            {/* Appel du menu */}
            <Menu/>
            {/* Afficher le premier article */}
            <div style={{display: 'flex', flexdirection : 'row', justifyContent:'center',alignItems:'center',marginLeft:'10%',marginRight:'10%',marginTop:'5%',marginBottom:'5%'}}>
                <img style={{width:'40%' ,borderRadius:10}} src={setup} alt="article" />
                <div> <MainNews id={0} /></div>
            </div>
            <hr style={{backgroundColor: 'grey',marginLeft:'10%',marginRight:'10%',height:"0.05px"}}/>
            {/* Afficher les articles 1 à 3 */}
            <MediumActualite/>
            {/* Afficher les articles 3 à Fin du tableau */}
            <SmallActualite/>
            {/* Footer (image pour le moment) */}
            <img style={{ width: '100%'}} src={footer} alt="footer" />
        </div>
    );
}

export default Actualite;
