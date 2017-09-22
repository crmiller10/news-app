import React, { Component } from 'react';
import './styles/style.css';
import NewsSource from './components/NewsSource';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      sources: [
        'engadget',
        'espn',
        'fortune'
      ],
    }
  }

  render() {

    let newsSources = this.state.sources.map(source => <NewsSource source={source} />)

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="">A News Approach</a>
          </div>
        </nav>
        <div className="main">
          <div className="container">
              {newsSources}
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand">A News Approach</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;

