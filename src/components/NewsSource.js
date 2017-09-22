import React, { Component } from 'react';
import NewsStory from './NewsStory';

class NewsSource extends Component {
  constructor(props){
    super(props);

    this.state = {
      source: this.props.source,
      newsResults: []
    }
  }

componentWillMount(){
  fetch('https://newsapi.org/v1/articles?source=' + this.state.source + '&sortBy=top&apiKey=9e33c7aadc5a4b6593366b1348dac33f')
  .then(response => response.json())
  .then(response => {

    this.setState({
      newsResults: response.articles
    });
  });
}

  render(){

    let articles = this.state.newsResults.map(newstory => <NewsStory story={newstory} />)

    return(
      <div className="source">
        <h1>{this.state.source}</h1>
        <div className="listArticles">
          {articles}
        </div>
      </div>
    );
  };
}

export default NewsSource;
