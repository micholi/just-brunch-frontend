import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../actions';
import { fetchComments } from '../actions';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';
//import EditRestaurant from '../components/EditRestaurant'
import { deleteRestaurant } from '../actions'

class RestaurantShow extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
    this.props.fetchComments(this.props.match.params.restaurantId);
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

          </div>

          <div>
            <Button
              className="btn btn-outline-danger"
              onClick={() => deleteRestaurant(restaurant.id, history)}
              >
              Delete Restaurant
            </Button>
          </div>





          <div className="bottom-border"></div>

          <CommentsList comments={comments} />
          <CommentForm restaurantId={restaurant.id} />

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

export default connect(mapStateToProps, { fetchComments, fetchRestaurant,deleteRestaurant })(RestaurantShow);
