export default (state={restaurants: []}, action) => {

  switch (action.type) {
    case 'LOADING_RESTAURANTS':
    return state = {restaurants: []}

    case 'GET_RESTAURANTS':
      return {...state, restaurants: action.restaurants}


  default:
    return state;
  }
}
