export default (state = [], action) => {

  switch(action.type) {

    case 'LOADING_RESTAURANTS':
      return state

    case 'FETCH_RESTAURANTS':
      return action.restaurants

    case 'FETCH_RESTAURANT':
      return action.restaurant

    case 'ADD_RESTAURANT':
      return state.concat(action.restaurant);

    case 'REMOVE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.id)

    case 'LIKE_RESTAURANT':
      return state.map((restaurant) => {
        if (restaurant.id === action.restaurant.id) {
          return action.restaurant
        } else {
          return restaurant
        }
      });

  default:
    return state;
  }
}
