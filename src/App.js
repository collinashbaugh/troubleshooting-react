import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';

import AddCountry from './countries/AddCountry.js';
import Navigation from './components/Navigation.js';
import Slider from './components/Carousel.js';
// import LogIn from './components/LogIn.js'
import SignUp from './components/SignUp.js'
import CountriesList from './countries/CountriesList.js'
import DeleteCountry from './countries/RemoveCountry'
import UpdateCountry from './countries/UpdateCountry'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
          <Route exact path="/Countries/Delete" component={DeleteCountry} />
          <Route exact path="/Countries/New" component={AddCountry}/>
          <Route exact path="/Countries/Update" component={UpdateCountry}/>
          <Route exact path="/" component={Slider}/>
          <Route path="/Highest-Rated" component={CountriesList} />
          {/* <Route path="/LogIn" component={LogIn} /> */}
          <Route path="/SignUp" component={SignUp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
