import React, { Component } from 'react';
import './App.css';
import ClassNames from 'classnames';
import Sound from 'react-sound';

class App extends Component {
  
  constructor (props) {
    super(props);
  }
  
  render() {
    const renderContent = () => this.state.content.split(" ");

    const appClassName = ClassNames({
      'App': true,
      'App-fadeIn': true,
    })
    const linkClassName = ClassNames({
      'App-link': true,
      'App-link-hidden': true,
    })
    
    return (
      <div className={appClassName}>
        <header className="App-header App-noselect">
          <h1>Hello Dolly</h1>
        </header>
      </div>
    );
  }
}

export default App;
