// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'



class App extends Component {
  render() {
    
    return (
      <div className ="App">
        
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <Rank />
    {/* <FaceRecognition /> */}
      </div>
 
    )
  }
}

export default App;