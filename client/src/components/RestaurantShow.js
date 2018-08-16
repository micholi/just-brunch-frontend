import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../actions'

import { withRouter } from 'react-router-dom';

class RestaurantShow extends React.Component {

  render() {

    const { restaurant } = this.props;

    return (

      <div>
        <h3>{restaurant.name}</h3>
        <img src={restaurant.image} width="30%" height="50%" alt="pic" rounded/>
        <p>Neighborhood: {restaurant.neighborhood}</p>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Price Range: {restaurant.price_range}</p>
        <p>Dress Code: {restaurant.dress_code}</p>
      </div>
    )
  }
}

// correctly displays restaurant when clicking on link, but not when manually updating the url
const mapStateToProps = (state, ownProps) => {
  const restaurant = state.restaurants.find(restaurant => restaurant.id === parseInt(ownProps.match.params.id, 10))
    return restaurant ? { restaurant } : {restaurant: {} };

  return ({
    restaurant: restaurant
  })
}

export default connect(mapStateToProps)(RestaurantShow);
