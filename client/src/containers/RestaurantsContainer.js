import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchRestaurants } from '../actions';
import RestaurantsList from '../components/RestaurantsList'
import Restaurant from '../components/Restaurant';

class RestaurantsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Switch>
          <Route exact path={match.url} component={RestaurantsList}/>

        </Switch>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mapStateToProps, {fetchRestaurants})(RestaurantsContainer)
