export default (state = [], action) => {
  switch(action.type) {

    case 'LOADING_RESTAURANTS':
      return state

    case 'FETCH_RESTAURANTS':
      return action.restaurants

    case 'GET_RESTAURANT':
      return { restaurant: action.restaurant }

    case 'ADD_RESTAURANT':
      return {restaurants: [...state.restaurants, action.restaurant]}


    case 'EDIT_RESTAURANT':
      return state.restaurants.map((restaurant) => {
        if (restaurant.id === action.restaurant.id) {
          restaurant.name = action.restaurant.name
          restaurant.neighborhood = action.restaurant.neighborhood
          restaurant.cuisine = action.restaurant.cuisine
          restaurant.price_range = action.restaurant.price_range
          restaurant.dress_code = action.restaurant.dress_code
          restaurant.image = action.restaurant.image
        }
      })
      return {...state, restaurant: action.restaurant}


    case 'REMOVE_RESTAURANT':
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restaurant)}

  default:
    return state;
  }
}
