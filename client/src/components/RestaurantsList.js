import React, { Component } from 'react';
import Restaurant from './Restaurant';
import { connect } from 'react-redux';
// import { fetchRestaurants } from '../actions';

class RestaurantsList extends Component {

  render() {

    const renderRestaurants = () => {
      return this.props.restaurants.map(restaurant =>
          <Restaurant key={restaurant.id} restaurant={restaurant} />)
    }

    return (
      <div>
          {renderRestaurants}
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(RestaurantsList)
