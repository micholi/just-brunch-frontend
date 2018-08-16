const API_URL = 'http://localhost:3001/api'

export const getRestaurants = restaurants => {
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
  return (dispatch) => {
    dispatch({type: 'LOADING_RESTAURANTS'});
      return fetch(`${API_URL}/restaurants`)
      .then(resp => resp.json())
      .then(restaurants => dispatch({type: 'FETCH_RESTAURANTS', payload: restaurants}))
  }
}

/*
export const getRestaurant = (restaurant) => {
  return (dispatch) => {

      return fetch(`http://localhost:3001/api/restaurants/${restaurant.id}`)
      .then(resp => resp.json())
      .then(restaurant => dispatch({type: 'GET_RESTAURANT', restaurant}))
  }
}
*/
