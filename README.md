Today you're going to create a news reader app using the amazing News API. You should display the latest stories from a series of news sources.

## Live Demo
http://react-news-app.surge.sh

## Requirements

* You should create a NewsSource component that displays all the news from a given source. You should be able to display all of the news from Techcrunch, for example, by creating <NewsSource from="techcrunch">, where from is a custom prop. You should display stories from each news source in their own section.
* You should also create a component for each NewsStory, which displays a single story. You should use the same component regardless of the source.
* Every story should display a title and a description. You can optionally include a picture if one is available.
* Display stories from at least three news sources.

## Getting started
npm install
npm start

## Production
Note that the development build is not optimized.
To create a production build, use yarn build.

The build folder is ready to be deployed.
You may serve it with a static server:

  serve -s build