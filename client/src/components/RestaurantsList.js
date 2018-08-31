import React from 'react';
import RestaurantCard from '../containers/RestaurantCard';
import PriceFilter from './PriceFilter';

class RestaurantsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      priceFilter: 'All',
      sortedDesc: true // initial state for yums sort order
    }
  }

  renderRestaurants = (restaurants) => {
    const defaultSort = this.state.sortedDesc
    // if defaultSort = true, display highest to lowest; else display lowest to highest
    restaurants.sort(function(a,b) {
      if (defaultSort) {
      return b.likes - a.likes
    } else {
      return a.likes - b.likes
    }
  })
    return restaurants.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
  }

  restaurantFilter = () => {
    let filteredList = ""
    if (this.state.priceFilter === 'All') {
      filteredList = this.props.restaurants
    } else {
      filteredList = this.props.restaurants.filter(restaurant => this.state.priceFilter === restaurant.price_range);
    }
    return filteredList
  }

  handleFilterChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

// update state to inverse of previous state
  handleSort = ()  => {
    this.setState({
      sortedDesc: !this.state.sortedDesc
    })
  }

  render(){
    return (
      <div className="restaurants-index">
        <PriceFilter handleChange={this.handleFilterChange} />
        {/* Change text based on sortedDesc value */}
        Displaying {this.state.sortedDesc ? 'Most Yums First' : 'Fewest Yums First'}
        {/* On click, call handleSort and toggle button text */}
        <button className="btn btn-sm btn-outline-dark sort-button" onClick={this.handleSort}>{this.state.sortedDesc ? 'Sort Lowest to Highest' : 'Sort Highest to Lowest'}</button>
          <div className="container-fluid">
            <div className="row">
            <br />
              {this.renderRestaurants(this.restaurantFilter())}
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantsList
