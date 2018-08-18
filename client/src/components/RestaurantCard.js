import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class RestaurantCard extends Component {

  render() {

    return (

      <div className="border border-secondary" style={{ marginTop: '35px', padding: 15, marginRight: 20, width: 300}}>
        <div className="container-fluid text-center">
          <h4><Link key={this.props.restaurant.id} to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link></h4>

          <img src={this.props.restaurant.image} width="100" height="100" alt="pic" />
          <br></br>
          <br></br>
          <p>Cuisine: {this.props.restaurant.cuisine}</p>
          <p>Neighborhood: {this.props.restaurant.neighborhood}</p>
          <button type="button" className="btn btn-sm btn-outline-secondary">View Details</button>
          </div>
      </div>
    )
  }
}

export default RestaurantCard;
