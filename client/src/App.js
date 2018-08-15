import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RestaurantNew from './components/RestaurantNew';
import RestaurantsContainer from './containers/RestaurantsContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={RestaurantNew} />
        <Route exact path="/restaurants" component={RestaurantsContainer} />


        </div>
      </Router>
    );
  }
}

export default App;
