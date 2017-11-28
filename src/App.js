import React, { Component } from 'react';
import logo from './dist/logo.png';
import img1 from './dist/header_image_1.png';
import img2 from './dist/header_image_2.png';
import img3 from './dist/header_image_3.png';
import Grid from './Grid.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span id="logo"><img src={logo} className="App-logo" alt="logo" /></span>
          <span id="filler"></span><span id="filler"></span><span id="filler"></span>
          <span>&#9776;</span>
          <span>LOGIN</span>
          <span>215.555.5555</span>
        </header>
        <p className="Img-header">
          <span id="carousel"><img src={img1} className="Image-Carousel" alt="image" /></span>
        </p>
        <Grid/>
      </div>
    );
  }
}

export default App;
