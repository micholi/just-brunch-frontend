import fetch from 'isomorphic-fetch';

export const fetchRestaurants = () => {
  return (dispatch) => {
    dispatch({type: 'LOADING_RESTAURANTS'});
      return fetch('http://localhost:3001/api/restaurants')
      .then(resp => resp.json())
      .then(restaurants => dispatch({type: 'GET_RESTAURANTS', restaurants}))
  }
}
