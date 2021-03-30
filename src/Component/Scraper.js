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
    let datarecup = [];
    lexport('.data_table.summonerRankingsTable.with_sortable_column td .img-align-block').each((i, elem) => {
      if (i < 10) {
        datarecup.push({
          ID: lexport(elem).find('.txt span.name').text(),
        })
      }
    })
    this.setState({ data: datarecup.map((e, i) => e.ID) })
    //console.log(datarecup)
    //console.log(datarecup.map((e, i) =>e.title))
  }
  render() {
    return (
      <div >
        <p />
        {this.state.data.map((object, i) => <p>{object}</p>)}
        <p />
      </div>
    );
  }
}
export default ScrapSteam;
