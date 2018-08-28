import React from 'react';
import RestaurantCard from '../containers/RestaurantCard';
import { connect } from 'react-redux';
import PriceFilter from './PriceFilter';

class RestaurantsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      priceFilter: 'All'
    }
  }

  renderRestaurants = (restaurants) => {
    restaurants.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
        return 0;
      })
     return restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
  }

  filteredRestaurants = () => {
    if (this.state.priceFilter === 'All') {
      return this.props.restaurants
    } else {
      const filteredByPrice = this.props.restaurants.filter(restaurant => this.state.priceFilter === restaurant.price_range);
      return filteredByPrice;
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return (
      <div className="restaurants-index">
        <PriceFilter handleChange={this.handleChange} />
          <div className="container-fluid">
            <div className="row">
            <br />
              {this.renderRestaurants(this.filteredRestaurants())}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps)(RestaurantsList);
