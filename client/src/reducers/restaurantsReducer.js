export default (state = [], action) => {

  switch(action.type) {

    case 'LOADING_RESTAURANTS':
      return state

    case 'FETCH_RESTAURANTS':
      return action.restaurants

    case 'FETCH_RESTAURANT':
      return action.restaurant

    case 'ADD_RESTAURANT':
      //return {restaurants: [...state.restaurants, action.restaurant]}
      return state.concat(action.restaurant);

/*
    case 'EDIT_RESTAURANT':


      state.map((restaurant) => {
        if (restaurant.id === action.restaurant.id) {
          restaurant.name = action.restaurant.name
          restaurant.neighborhood = action.restaurant.neighborhood
          restaurant.cuisine = action.restaurant.cuisine
          restaurant.price_range = action.restaurant.price_range
          restaurant.dress_code = action.restaurant.dress_code
          restaurant.image = action.restaurant.image
        }
      })

      return action.restaurant
*/

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
