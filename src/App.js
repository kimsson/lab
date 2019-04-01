import React, { Component } from 'react';
import './App.css';
import ClassNames from 'classnames';

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      content: ['Vill', 'du', 'gå', 'på', 'bio', '?'],
      step: 0,
      link: false,
    }
  }
  
  render() {
    const nextContent = id => {
      console.log(id);
    }
    const linkClassName = ClassNames({
      'App-link': true,
      'App-link-hidden': !this.state.link
    })
    return (
      <div className="App" onClick={()=> {
       if(this.state.step >= this.state.content.length-1) {
          this.setState({ link: true })
          return;
        }
        this.setState({step: this.state.step+=1});
        nextContent(this.state.step)}}>
        <header className="App-header">
          <h2>🥳 Grattis Iry 🦄</h2>
          <h3>{this.state.content[this.state.step]}</h3>
          <a className={linkClassName} href="tel:0046739036967">
            Jippi!!! Klicka här!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
