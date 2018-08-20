import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../actions';
import { fetchComments } from '../actions';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';
//import { updateRestaurant } from '../actions';
import { deleteRestaurant } from '../actions';

import { likeRestaurant } from '../actions';
import LikeButton from '../components/LikeButton'

class RestaurantShow extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
    this.props.fetchComments(this.props.match.params.restaurantId);
  }

  handleOnClick = () => {
    this.props.likeRestaurant(this.props.restaurant)
  }

  render() {
    const { restaurant, comments, deleteRestaurant, history } = this.props;


    return (
      <div className="show">
        <div className="container-fluid">
          <h3 className="restaurant-header">{restaurant.name}</h3>
            <div className="restaurant-body">
            <img src={restaurant.image} width="100%" height="75%" alt="pic" />
            <br></br>
            <span>Neighborhood: {restaurant.neighborhood}</span>
            <br></br>
            <span>Cuisine: {restaurant.cuisine}</span>
            <br></br>
            <span>Price: {restaurant.price_range}</span>
            <br></br>
            <span>Dress Code: {restaurant.dress_code}</span>
            <br></br>
          </div>

          <div className="restaurant-buttons">
            <Button
              className="btn btn-sm btn-outline-dark"
              onClick={() => deleteRestaurant(restaurant.id, history)}
              >
              Delete Restaurant
            </Button>

            <LikeButton restaurant={restaurant} likeRestaurant={this.handleOnClick} />
          </div>

          <div className="bottom-border"></div>

          <CommentsList comments={comments} />
          <CommentForm restaurantId={this.props.match.params.restaurantId} />

        </div>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const restaurant = state.restaurants.find(restaurant => restaurant.id === parseInt(ownProps.match.params.restaurantId, 10)) || {}
  return ({
    restaurant: restaurant,
    comments: state.comments
  })
}

export default connect(mapStateToProps, { fetchComments, fetchRestaurant, deleteRestaurant, likeRestaurant })(RestaurantShow);
