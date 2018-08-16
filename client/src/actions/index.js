const API_URL = 'http://localhost:3001/api'

const setRestaurants = restaurants => {
  return {
    type: 'FETCH_RESTAURANTS',
    restaurants
  }
}

export const addRestaurant = restaurant => {
  return {
    type:'CREATE_RESTAURANT',
    restaurant
  }
}

export const removeRestaurant = restaurant => {
  return {
    type: 'REMOVE_RESTAURANT',
    restaurant
  }
}

export const fetchRestaurants = () => {
  return dispatch => {
    dispatch({type: 'LOADING_RESTAURANTS'});
      return fetch(`${API_URL}/restaurants`)
      .then(resp => resp.json())
      .then(restaurants => dispatch(setRestaurants(restaurants)))
      .catch(error => console.log(error))
  }
}
