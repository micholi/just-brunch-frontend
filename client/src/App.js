import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RestaurantNew from './components/RestaurantNew';
import RestaurantShow from './components/RestaurantShow';
import RestaurantsContainer from './containers/RestaurantsContainer';

//import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <NavBar />
        <Route exact path="/" component={Home} />

        <Route exact path="/new" component={RestaurantNew} />
        <Route exact path="/restaurants" component={RestaurantsContainer} />

        <Route exact path="/restaurants/:id" component={RestaurantShow} />
        </div>
      </Router>
    );
  }
}

export default App;
