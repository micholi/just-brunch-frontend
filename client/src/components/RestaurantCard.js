import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantCard extends Component {

  render() {

    return (
      <div className="col-6" style={{ marginTop: '35px' }}>
        <div className="container-fluid text-center">
          <h4><Link key={this.props.restaurant.id} to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link></h4>

          <p>Cuisine: {this.props.restaurant.cuisine}</p>
          <p>Neighborhood: {this.props.restaurant.neighborhood}</p>
        </div>
      </div>
    )
  }
}

export default RestaurantCard;
