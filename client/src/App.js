import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import RestaurantNew from './containers/RestaurantNew';
import RestaurantShow from './containers/RestaurantShow';
import RestaurantsPage from './containers/RestaurantsPage';
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
              <Route exact path="/new" component={RestaurantNew} />
              <Route exact path="/restaurants" component={RestaurantsPage} />
              <Route path="/restaurants/:restaurantId" component={RestaurantShow} />
              <Route path="/recipes" component={Recipes} />
            </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
