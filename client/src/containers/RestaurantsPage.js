import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchRestaurants } from '../actions';
import RestaurantsList from '../components/RestaurantsList'
import RestaurantShow from './RestaurantShow';
import RestaurantNew from './RestaurantNew';
import RestaurantCard from '../components/RestaurantCard';
import { Link } from 'react-router-dom';

class RestaurantsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {

    const { restaurants, match } = this.props

    return (

      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
              <RestaurantsList restaurants={restaurants} />
            )}/>

          <Route exact path="/new" component={RestaurantNew} />
          <Route path={`${match.url}/:restaurantId`} component={RestaurantShow} />
        </Switch>
      </div>
    )
  }
}

export default connect(state => ({ restaurants: state.restaurants }), { fetchRestaurants })(RestaurantsContainer);
