import React from 'react'
import Menu from '../Component/Menu';
import footer from '../Img/footer.png'
import {
    Link
} from "react-router-dom";


function Recruitment() {
    return (
        <div >
            <Menu />
            <img style={{ width: '100%' }} src={footer} alt="footer" />
        </div>
    );
}

export default Recruitment;
