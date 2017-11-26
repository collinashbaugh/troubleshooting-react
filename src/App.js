import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Navigation from './Navigation.js';
import Slider from './Carousel.js';
import HighestRated from './HighestRated.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Route path="/" component={Slider}/>
          <Route path="/Highest-Rated" component={HighestRated} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
