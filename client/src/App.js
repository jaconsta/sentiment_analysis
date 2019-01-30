import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import SentimentAnalyzer from './components/SentimentAnalyzer'
import logo from './logo.svg';
import './App.css';

class OldApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const App = () => {
  return (
    <Router>
      <div className="App">
        <SentimentAnalyzer />
      </div>
    </Router>
  )
}


export default App;
