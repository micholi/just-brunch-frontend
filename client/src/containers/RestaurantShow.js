import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../actions';
import { fetchComments } from '../actions';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm'

class RestaurantShow extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
    this.props.fetchComments(this.props.match.params.restaurantId);
  }

  render() {
    const { restaurant, comments } = this.props;

    return (
      <div>
        <h3>{restaurant.name}</h3>
        <img src={restaurant.image} width="30%" height="50%" alt="pic" />
        <p>Neighborhood: {restaurant.neighborhood}</p>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Price: {restaurant.price_range}</p>
        <p>Dress Code: {restaurant.dress_code}</p>
        <br></br>

        <CommentsList comments={comments} />
        <CommentForm restaurantId={restaurant.id} />
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

export default connect(mapStateToProps, { fetchComments, fetchRestaurant })(RestaurantShow);