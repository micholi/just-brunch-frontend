import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RestaurantNew from './components/RestaurantNew';
import RestaurantsPage from './containers/RestaurantsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/new" component={RestaurantNew} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to my my final assessment project!</h1>
          </header>

        </div>
      </Router>
    );
  }
}

export default App;
