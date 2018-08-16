import React from 'react';
import { connect } from 'react-redux';
import RestaurantCard from './RestaurantCard';
import { Link } from 'react-router-dom';


class RestaurantsList extends React.Component {

/*
  renderRestaurants = this.props.restaurants.map(restaurant =>
  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
)
*/

/*
  renderRestaurants = this.props.restaurants.map((restaurant) =>
    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  )
*/


renderRestaurants = () => {
  return this.props.restaurants.map(restaurant =>
    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  )
}



  render() {

/*
    const renderRestaurants = this.props.restaurants.map(function(restaurant) {
      return (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      );
    });
*/

/*
  const renderRestaurants = () => {
    return this.props.restaurants.map(restaurant =>
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    )
  }
*/

    return (
      <div>
        {this.renderRestaurants()}
      </div>
    )

  }
}


const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(RestaurantsList);
