import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const RestaurantCard = (props) => {
  const {name, cuisine, neighborhood} = this.props

  return (
    <div>
      <h1>This is a test</h1>
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>Neighborhood: {neighborhood}</p>

    </div>
  )
}

export default RestaurantCard;
