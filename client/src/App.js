import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RestaurantForm from './components/RestaurantForm';
import RestaurantShow from './components/RestaurantShow';
import RestaurantsContainer from './containers/RestaurantsContainer';
import './App.css'

//import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />

        <Route exact path="/new" component={RestaurantForm} />
        <Route exact path="/restaurants" component={RestaurantsContainer} />

        <Route exact path="/restaurants/:restaurantId" component={RestaurantShow} />
        </div>
      </Router>
    );
  }
}

export default App;
