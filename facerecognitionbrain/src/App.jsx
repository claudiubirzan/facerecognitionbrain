// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesComponent from './components/Particles/particles'


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div className="particles-container">
          <ParticlesComponent id="particles" />
        </div>
        <div className="navigation">
          <Navigation />
        </div>
        <div className="logo">
          <Logo />
        </div>
        <div className="formLink">
          <ImageLinkForm />
        </div>
        <div className="rank">
          <Rank />
        </div>
        {/* <FaceRecognition /> */}
      </div>
    );
  };
}

export default App;
