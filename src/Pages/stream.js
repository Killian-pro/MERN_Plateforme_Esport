import React from 'react'
import Menu from '../Componant/Menu';
import RecupStream from '../Componant/Stream';
import footer from '../Img/footer.png'
import {
    Link
} from "react-router-dom";


function Stream() {
    return (
        <div >
            <Menu />
            <RecupStream />
            <img style={{ width: '100%' }} src={footer} alt="footer" />
        </div>
    );
}

export default Stream;
