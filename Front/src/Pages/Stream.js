import React from 'react'
import Menu from '../Component/Menu';
import RecupStream from '../Component/Stream';
import footer from '../Img/footer.png'
import {
    Link
} from "react-router-dom";
import Footer from '../Component/Footer';


function Stream() {
    return (
        <div >
            <Menu />
            <RecupStream />
            <Footer />
        </div>
    );
}

export default Stream;
