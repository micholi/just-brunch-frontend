import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchRestaurants } from '../actions';
import RestaurantsList from '../components/RestaurantsList'
import RestaurantShow from '../components/RestaurantShow';
import RestaurantForm from '../components/RestaurantForm';
import RestaurantCard from '../components/RestaurantCard';

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

          <Route exact path="/new" component={RestaurantForm} />
          <Route exact path={`${match.url}/:restaurantId`} component={RestaurantShow} />
        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}


export default connect(mapStateToProps, { fetchRestaurants })(RestaurantsContainer)

//export default connect(state => ({ restaurants: state.restaurants }), { fetchRestaurants })(RestaurantsContainer);
