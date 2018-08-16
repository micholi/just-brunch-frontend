import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantCard extends Component {

  render() {

    return (
      <div>
        <h3>{this.props.restaurant.name}</h3>
        <p>Cuisine: {this.props.restaurant.cuisine}</p>
        <p>Neighborhood: {this.props.restaurant.neighborhood}</p>

      </div>
    )
  }
}

export default RestaurantCard;
