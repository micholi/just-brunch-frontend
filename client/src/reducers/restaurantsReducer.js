function restaurantsReducer(state = {restaurants: []}, action) => {

  switch(action.type) {
    case 'GET_RESTAURANTS':
      return {...state, restaurants: action.restaurants}


  default:
    return state;
  }
}
