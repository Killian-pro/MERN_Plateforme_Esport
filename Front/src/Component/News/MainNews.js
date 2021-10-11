import React, { Component } from 'react';
import '../../Style/News.css';
import * as rssParser from 'react-native-rss-parser';
import setup from '../../Img/setup.jpg'


class MainNews extends Component {
    constructor(props) {
        super(props);
        // initialisation des States
        this.state = {
            title: '',
            items: [],
            content_title: [],
            content_description: [],
            images :''
        }
    }
    componentDidMount() {
        fetch('https://www.team-aaa.com/rss/full.xml')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                // recupération du titre et description
                this.setState({ title: rss.title, items: rss.items })
                this.setState({ content_title: this.state.items.map((e, i) => e.title) })
                this.setState({ content_description: this.state.items.map((e, i) => e.description) })


            })
    }

    getImage(src)
    {
        // return fetch('https://serpapi.com/search.json?q='+src+'&tbm=isch&ijn=0&api_key=2c57573f368c90ecaf4dd672b50376d8c068983fdc8d89d20173a49de2083eef')
        //     .then((response) => response.json().then(json => {
        //        console.log(json.images_results[0].thumbnail)
        //       }))
        if(src)
        fetch('https://serpapi.com/search.json?q='+src+'&tbm=isch&ijn=0&api_key=2c57573f368c90ecaf4dd672b50376d8c068983fdc8d89d20173a49de2083eef')
            .then((response) => response.json().then(json => {
                this.setState({ images: json.images_results[0].thumbnail })
              }))
    }


    // fonction pour récupérer le tableau dans les fils
    passitems()
    {
        if (this.props.getNbItems!= null)
        this.props.getNbItems(this.state.items)
    }


    render() {
        return (
            <div style={{marginLeft:'2%',width:'80%' }}>
                {/* AJOUTER DES IMAGES PROBLEMES PERF */}
                {/* {this.getImage(this.state.content_title[this.props.id])} */}
                {this.props.description !==false && (this.state.images ? <img style={{ width: '100%', borderRadius: 10 }} src={this.state.images} alt="article" /> : <img style={{ width: '100%', borderRadius: 10 }} src={setup} alt="article" />)}
                {this.props.description ==false && this.props.home==false && (this.state.images ? <img style={{ width: '20%', borderRadius: 10 }} src={this.state.images} alt="article" /> : <img style={{ width: '20%', borderRadius: 10 }} src={setup} alt="article" />)}
                {this.props.description ==false && this.props.home==true && (this.state.images ? <img style={{ width: '55%', borderRadius: 10 }} src={this.state.images} alt="article" /> : <img style={{ width: '100%', borderRadius: 10 }} src={setup} alt="article" />)}
                {/* tag en dur pour le moment*/}
                <div style={{color:'#440BD4',fontSize:'60%',marginBottom:'0.5%',fontWeight:'bold'}}>#TEAM</div>
                {/* titre */}
                <div style={{marginBottom:'1%',fontWeight:'bold', color:'#346060',fontSize:'90%' }}>
                    {this.state.content_title[this.props.id]}
                </div>
                {/* jour en dur pour le moment */}
                <div style={{color:'#827878',fontSize:'60%',marginBottom:'0.5%'}}>— 1jour</div>
                {/* description à afficher si différent de false*/}
                {this.props.description !==false && <div style={{ color:'#827878',fontSize:'60%'}}>
                    {this.state.content_description[this.props.id]}
                </div>}
                {this.passitems()}
            </div>
        );
    }
}

export default MainNews;
