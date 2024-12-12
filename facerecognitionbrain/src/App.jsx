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
      <div className ="App">
        <ParticlesComponent id ="particles"/>
        <div className="navigation">
          <Navigation />
        </div>
        <Logo />
          <div className="fromLink">
           <ImageLinkForm />
          </div>
        <div className="rank">  
          <Rank />
        </div>
    {/* <FaceRecognition /> */}
      </div>
 
    )
  }
}

export default App;
