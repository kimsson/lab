import React, { Component } from 'react';
import './App.css';
import ClassNames from 'classnames';
import Sound from 'react-sound';

class App extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      loaded: false,
      content: ' Iraida Grattis Vill du gå på bio ? I så fall klicka här fast nedanför haha hihi',
      step: 0,
      link: false,
      playStatus: Sound.status.PLAYING,
      position: 0,
      volume: 100,
      playbackRate: 1,
      loop: false,
      song: '',
    }
  }
  
  render() {
    const renderContent = () => this.state.content.split(" ");

    const appClassName = ClassNames({
      'App': true,
      'App-fadeIn': this.state.loaded,
    })
    const linkClassName = ClassNames({
      'App-link': true,
      'App-link-hidden': !this.state.link
    })
    
    const { playStatus, position, volume, playbackRate, loop, song, step, loaded } = this.state;
    return (
      <div className={appClassName} onClick={()=> {
        if(step===0) this.setState({song: 'http://kimsson.com/iry/sounds/arabiannights.mp3'});
        if(step >= renderContent().length-1) {
          this.setState({ link: true })
          const fadeInterval = setInterval(() => {
            let { volume } = this.state;
            if(volume <= 0) {
              clearInterval(fadeInterval);
              return;
            }
            this.setState({volume: this.state.volume-1});

          }, 25);
          return;
        }
        this.setState({step: this.state.step+=1});}

        }>
          <Sound
            url={song}
            playStatus={playStatus}
            position={position}
            volume={volume}
            playbackRate={playbackRate}
            loop={loop}
            onLoading={({ bytesLoaded, bytesTotal }) => console.log(`${bytesLoaded / bytesTotal * 100}% loaded`)}
            onLoad={() => {
              setTimeout(() => {
                this.setState({loaded: true, step: 1})}, 200);
              console.log('Loaded');
            }}
            onPlaying={({ position }) => this.setState({ position })}
            onPause={() => console.log('Paused')}
            onResume={() => console.log('Resumed')}
            onStop={() => console.log('Stopped')}
            onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
          />
        <header className="App-header App-noselect">
        {step === 0 ? (
          <h2>🦄</h2>
        ):(
          <h1>{loaded && renderContent()[this.state.step]}</h1>
        )} 
          <a className={linkClassName} href="tel:0046739036967">Ta da!</a>
        </header>
      </div>
    );
  }
}

export default App;
