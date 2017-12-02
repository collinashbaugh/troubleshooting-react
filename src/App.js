import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import Navigation from './components/Navigation.js';
import Slider from './components/Carousel.js';
import LogIn from './components/LogIn.js'
import CountriesList from './countries/CountriesList.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Route exact path="/" component={Slider}/>
          <Route path="/Highest-Rated" component={CountriesList} />
          <Route path="/LogIn" component={LogIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
