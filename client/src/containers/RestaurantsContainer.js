import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchRestaurants } from '../actions';
import RestaurantsList from '../components/RestaurantsList'
import RestaurantShow from '../components/RestaurantShow';
import RestaurantNew from '../components/RestaurantNew';
import RestaurantCard from '../components/RestaurantCard';

class RestaurantsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurants()
  }

  render() {

    const { restaurants, match } = this.props

    return (

      <div>
        <Switch>
          <Route exact path={match.url} render={() => (
              <RestaurantsList restaurants={restaurants} />
            )}/>


          <Route path={`${match.url}/:restaurantId`} component={RestaurantShow} />

          <Route path="/new" component={RestaurantNew} />

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


export default connect(mapStateToProps, { fetchRestaurants })(RestaurantsContainer)

//export default connect(state => ({ restaurants: state.restaurants }), { fetchRestaurants })(RestaurantsContainer);
