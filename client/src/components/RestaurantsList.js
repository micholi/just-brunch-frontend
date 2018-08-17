import React from 'react';
import { connect } from 'react-redux';
import RestaurantCard from './RestaurantCard';
//import { Link } from 'react-router-dom';

const RestaurantsList = ({ restaurants }) => {
//  add function to sort alphabetically?

  const renderRestaurants = restaurants.map(restaurant =>
     <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  );

    return (
      <div className="container">
        <div className="row">
          {renderRestaurants}
        </div>
      </div>
    )

}

export default RestaurantsList;
