import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Route } from 'react-router';

function Stream() {
    const [more,setMore] = useState(6);
    const mySiteStream = [
        { name: 'Gotaga', link: 'https://www.twitch.tv/gotaga' },
        { name: 'Solary', link: 'https://www.twitch.tv/solary' },
        { name: 'Skyyart', link: 'https://www.twitch.tv/skyyart' },
        { name: 'Kip', link: 'https://www.twitch.tv/bronzeorchallenger' },
        { name: 'LillSneaky', link: 'https://www.twitch.tv/lillsneaky' },
        { name: 'Chelxie', link: 'https://www.twitch.tv/chelxie' },
        { name: 'Lutti', link: 'https://www.twitch.tv/lutti' },
        { name: 'Domingo', link: 'https://www.twitch.tv/domingo' },
    ]

    function getAllSteam() {
        const tab = [];
        for (let index = 0; index < more; index++) {
            tab.push(
                <div style={{ backgroundColor: '#440BD4', marginRight: "2%", marginTop: '1%', textAlign: 'center', borderRadius: 5, color: 'white', fontWeight: 'bold' }}>
                    Stream {mySiteStream[index].name}
                    <ReactPlayer
                        width='400px'
                        height='300px'
                        url={mySiteStream[index].link}
                    />
                </div>
            )
        }
        return tab;
    }

    function addMore()
    {
        let nb=mySiteStream.length-more
        if(nb<3)
        {
            setMore(more+(mySiteStream.length-more))
        }
        else
        setMore(more+3)
    }
    return (
        <div>
             <div style={{flexDirection:'row',flexWrap:'wrap',display:'flex',justifyContent:'center',marginTop:'5%',marginBottom:'5%'}}>
            {getAllSteam()}
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginBottom: '10%', marginTop: '5%' }}>
                <button onClick={() => addMore()} style={{ borderColor: '#440BD4', backgroundColor: '#440BD4', borderWidth: 2, borderStyle: 'solid', borderRadius: 15, padding: 10, alignContent: 'center', color: 'white', fontWeight: 'bold', textAlign: 'center', width: 100 }}>Voir plus</button>
            </div>
        </div>
    );
}

export default Stream;
