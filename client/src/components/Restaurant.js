import React from 'react';
import {connect} from 'react-redux';

class Restaurant extends React.Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.neighborhood}</p>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const restaurant = state.restaurants.find(restaurant => restaurant.id === parseInt(ownProps.match.params.restaurantId, 10))
  return restaurant > {restaurant} : {restaurant: {} };
}

export default connect(mapStateToProps)(Restaurant);
