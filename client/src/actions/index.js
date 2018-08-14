export const setRestaurants = restaurants => {
  return {
    type: 'GET_RESTAURANTS'
    restaurants
  }
}

export const fetchRestaurants = () => {
  return dispatch => {
    return fetch('nttp://localhost:3001/api/restaurants')
  }
}
