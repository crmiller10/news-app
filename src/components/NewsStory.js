import React, { Component } from 'react';

class NewsStory extends Component {
  render(){
    return(
      <div className="article">
        <div className="row">
          <div className="col-md-6">
            <a href={this.props.story.url} target="_blank" className="articleLink">
              <img src={this.props.story.urlToImage} alt="" className="articleImage img-fluid"/>
            </a>
          </div>
          <div className="col-md-6">
            <h2>
              <a href={this.props.story.url} target="_blank" className="articleLink">
                {this.props.story.title}
              </a>
            </h2>
            <p className="lead">{this.props.story.description}</p>
            <p>{this.props.story.author}</p>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default NewsStory;
