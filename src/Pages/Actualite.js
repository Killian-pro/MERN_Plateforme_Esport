import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import News from '../Componant/News'

class Actualite extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const articles = [];
        for (let i = 0; i < 20; i++) {
            articles.push(<div className="containerNews">
            <News id = {i}/>
            </div>)
        }
        return (
            <div className="containerNews">
                <Link to="/Home">Home</Link>
                {articles}
            </div>
        );
    }
}

export default Actualite;
