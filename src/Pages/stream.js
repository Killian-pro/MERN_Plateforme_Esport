import React from 'react'
import ReactPlayer from 'react-player'
import {
    Link
} from "react-router-dom";


function Stream() {
    return (
        <div className="App">
           <Link to="/Home">Home</Link>
            <div className="container">
                Video tuto :
            <ReactPlayer url='https://www.youtube.com/watch?v=cO-NWWWan8I' />
            </div>
            
            <div className="container">
                Video stream gotaga :
                <ReactPlayer url='https://www.twitch.tv/gotaga' />
            </div>
        </div>
    );
}

export default Stream;
