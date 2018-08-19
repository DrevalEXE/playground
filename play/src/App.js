import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {articles:[]}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News</h1>
        </header>
        {this.state.articles.map((article) => {
          return <article>
            <p>{article.title}</p>
            <p>{article.publishedAt}</p>
            <p>----------------</p>
            </article>
        })}
        <p className="App-intro">
          ce019594880f43fb91e02ce8b26ee9e2
        </p>
      </div>
    );
  }
  componentDidMount() {
    axios.get("https://newsapi.org/v2/everything?q=Preston&from=2018-08-15&to=2018-08-19&sources=bbc-news&sortBy=popularity&apiKey=ce019594880f43fb91e02ce8b26ee9e2")
    .then(({data}) => {
      console.log(data)
      this.setState({articles: data.articles})
    })
  }
}


export default App;
