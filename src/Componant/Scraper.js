import axios from 'axios';
import cheerio from 'cheerio';
import React, { Component } from 'react';

class ScrapSteam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  async componentDidMount() {
    const html = await axios.get('https://www.leagueofgraphs.com/fr/rankings/summoners');
    // console.log(html.data)
    const lexport = await cheerio.load(html.data);
    let ledata=[];
    lexport('.data_table.summonerRankingsTable.with_sortable_column').each((i,elem)=>
    {
      if(i<=3)
      { 
          ledata.push({
          title: lexport(elem).find('.img-align-block .txt span.name').text(),
        })
      }
    })
    this.setState({data:ledata})
    console.log(ledata)
    //console.log(ledata.map((e, i) =>e.title))
  }

  render() {
    return (
      <div >
        {console.log(this.data)}
      </div>
    );
  }
}
export default ScrapSteam;
