import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LikeButton from '../components/LikeButton'
import { likeRestaurant } from '../actions';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

class RestaurantCard extends Component {

  handleOnClick = () => {
    this.props.likeRestaurant(this.props.restaurant)
  }

  render() {

    return (

      <div className="restaurant-card">
        <div className="container-fluid text-center">
          <h5 className="restaurant-header"><Link key={this.props.restaurant.id} to={`/restaurants/${this.props.restaurant.id}`}>{this.props.restaurant.name}</Link></h5>

          <img src={this.props.restaurant.image} width="125" height="100" alt="pic" />
          <br></br>

          <span className="bold-text">Cuisine: </span>{this.props.restaurant.cuisine}
          <br></br>
          <span className="bold-text">Neighborhood: </span>{this.props.restaurant.neighborhood}
          <br></br>
          <br></br>

          <ButtonGroup>
            <Link key={this.props.restaurant.id} to={`/restaurants/${this.props.restaurant.id}`}>
              <Button className="btn btn-sm btn-outline-dark">
                More Info
              </Button>
            </Link>
            <LikeButton restaurant={this.props.restaurant} likeRestaurant={this.handleOnClick} />
          </ButtonGroup>

        </div>
      </div>
    )
  }
}

export default connect(null, { likeRestaurant })(RestaurantCard);
