import React, { Component } from 'react';
import '../Style/News.css';
import * as rssParser from 'react-native-rss-parser';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            items: [],
            content_title:[],
            content_description:[],
        }


    }
    componentDidMount() {
        fetch('https://www.team-aaa.com/rss/full.xml')
            .then((response) => response.text())
            .then((responseData) => rssParser.parse(responseData))
            .then((rss) => {
                // console.log(rss.title);
                // console.log(rss.items);
                this.setState({ title: rss.title , items:rss.items })
                this.setState({content_title : this.state.items.map((e, i) =>e.title)})
                this.setState({content_description : this.state.items.map((e, i) =>e.description)})
                
                
            });
    }
 

    render() {
        return (
            <div className="containerNews">
                {/* {console.log(this.state.content_title)} */}
                <div className="containerNews">
                Titre :
                <p/>
                {this.state.content_title[this.props.id]}
                </div >
                <div className="containerNews">
                Description :
                <p/>
                {this.state.content_description[this.props.id]}
                </div>
                {/* {this.state.items.map((e, i) =>e.title)}
                {this.state.items.map((e, i) =>e.description)} */}
            </div>
        );
    }
}

export default News;
