import React from 'react';
import { connect } from 'react-redux';
import RestaurantCard from './RestaurantCard';

const RestaurantsList = ({ restaurants }) => {

  let alphaSort = restaurants.sort(function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
      }
    if (nameA > nameB) {
      return 1;
      }
      return 0;
    });

  const renderRestaurants = alphaSort.map(restaurant =>
     <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  );

    return (
      <div className="restaurants-index">
        <div className="container-fluid">
          <div className="row">
            {renderRestaurants}
          </div>
        </div>
      </div>
    )
}

export default RestaurantsList;
