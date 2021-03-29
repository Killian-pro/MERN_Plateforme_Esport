import React, { Component } from 'react';
import '../Style/News.css';
import * as rssParser from 'react-native-rss-parser';

class MainNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            items: [],
            content_title: [],
            content_description: [],
        }


    }
    componentDidMount() {
        fetch('https://www.team-aaa.com/rss/full.xml')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                // console.log(rss.title);
                // console.log(rss.items);
                this.setState({ title: rss.title, items: rss.items })
                this.setState({ content_title: this.state.items.map((e, i) => e.title) })
                this.setState({ content_description: this.state.items.map((e, i) => e.description) })


            });
    }


    render() {
        return (
            <div style={{marginLeft:'2%',width:'80%' }}>
                {/* tag */}
                <div style={{color:'#440BD4',fontSize:'60%',marginBottom:'0.5%',fontWeight:'bold'}}>#TEAM</div>
                {/* titre */}
                <div style={{marginBottom:'1%',fontWeight:'bold',fontSize:'120%',color:'#346060',fontSize:'90%' }}>
                    {this.state.content_title[this.props.id]}
                </div>
                <div style={{color:'#827878',fontSize:'60%',marginBottom:'0.5%'}}>— 1jour</div>
                {/* description */}
                {this.props.description !==false && <div style={{ color:'#827878',fontSize:'60%'}}>
                    {this.state.content_description[this.props.id]}
                </div>}
                {/* </div> */}
                {/* {this.state.items.map((e, i) =>e.title)}
                {this.state.items.map((e, i) =>e.description)} */}
            </div>
        );
    }
}

export default MainNews;
