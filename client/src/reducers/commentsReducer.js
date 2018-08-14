function commentsReducer(state = {comments: []}, action) => {

  switch(action.type) {
    case 'GET_COMMENTS':
      return {...state, comments: action.comments}


  default:
    return state;
  }
}
