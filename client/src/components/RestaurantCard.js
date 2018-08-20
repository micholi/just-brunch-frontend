import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// note button link not yet functional
class RestaurantCard extends Component {

  render() {

    return (

      <div className="restaurant-card">
        <div className="container-fluid text-center">
          <h5 className="restaurant-header"><Link key={this.props.restaurant.id} to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link></h5>

          <img src={this.props.restaurant.image} width="125" height="100" alt="pic" />
          <br></br>
        
          <span className="bold-text">Cuisine: {this.props.restaurant.cuisine}</span>
          <br></br>
          <span className="bold-text">Neighborhood: {this.props.restaurant.neighborhood}</span>
          <br></br>
          <br></br>
          <button type="button" className="btn btn-sm btn-outline-secondary">View Details</button>
          </div>
      </div>
    )
  }
}

export default RestaurantCard;
