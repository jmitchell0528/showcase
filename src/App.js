import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopicBrowser />
      </div>
    )
  }
}

export default App;

// ^ adding a div with a classname helps with styling, plus if TopicBrowser was the only thing being rendered, then placing it in a div wouldn't be needed.
