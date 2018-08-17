const API_URL = 'http://localhost:3001/api'

const setRestaurants = restaurants => {
  return {
    type: 'FETCH_RESTAURANTS',
    restaurants
  }
}

export const addRestaurant = restaurant => {
  return {
    type:'ADD_RESTAURANT',
    restaurant
  }
}

export const removeRestaurant = restaurant => {
  return {
    type: 'REMOVE_RESTAURANT',
    restaurant
  }
}

export const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

const setComments = comments => {
  return {
    type: 'FETCH_COMMENTS',
    comments
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

export const fetchComments = (restaurantId) => {
  return dispatch => {
    dispatch({type: 'LOADING_COMMENTS'});
      return fetch(`${API_URL}/restaurants/${restaurantId}/comments`)
      .then(resp => resp.json())
      .then(comments => dispatch(setComments(comments)))
      .catch(error => console.log(error))
  }
}

export const createRestaurant = (restaurant) => {

}

export const createComment = (comment, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/restaurants/${comment.restaurant_id}/comments`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: comment})
    })
    //.then(handleErrors)
    .then(response => response.json())
    .then(comment => {
      dispatch(addComment(comment))
    // comemnt created, but doesn't render
    //  routerHistory.replace(`/restaurants/${comment.restaurant_id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
    })
  }
}
