import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../actions';
import { fetchComments } from '../actions';
import { deleteRestaurant } from '../actions';
import { likeRestaurant } from '../actions';
import CommentsList from '../components/CommentsList';
import CommentNew from '../components/CommentNew';
import LikeButton from '../components/LikeButton'
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

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
      <div className="restaurant-show">
        <div className="container-fluid">
          <h3 className="restaurant-header">{restaurant.name}</h3>
            <div className="restaurant-body">
            <img src={restaurant.image} width="100%" height="75%" alt="pic" />
            <br></br>
            <span className="bold-text">Neighborhood: </span>{restaurant.neighborhood}
            <br></br>
            <span className="bold-text">Cuisine: </span>{restaurant.cuisine}
            <br></br>
            <span className="bold-text">Price: </span>{restaurant.price_range}
            <br></br>
            <span className="bold-text">Dress Code: </span>{restaurant.dress_code}
          </div>

          <div className="restaurant-buttons">
            <ButtonGroup>
              <Button
                className="btn btn-sm btn-outline-dark"
                onClick={() => deleteRestaurant(restaurant.id, history)}
                >
                Delete
              </Button>

              <LikeButton restaurant={restaurant} likeRestaurant={this.handleOnClick} />
            </ButtonGroup>
          </div>

          <div className="bottom-border"></div>

          <CommentsList comments={comments} />
          <CommentNew restaurantId={this.props.match.params.restaurantId} />

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
