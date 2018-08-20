import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RestaurantForm from './components/RestaurantForm';
import RestaurantShow from './containers/RestaurantShow';
import RestaurantsPage from './containers/RestaurantsPage';
//import EditRestaurant from './components/EditRestaurant';
import Recipes from './components/Recipes';
import './App.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/new" component={RestaurantForm} />
            <Route exact path="/restaurants" component={RestaurantsPage} />


            <Route path="/restaurants/:restaurantId" component={RestaurantShow} />


            <Route path="/recipes" component={Recipes} />



          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
