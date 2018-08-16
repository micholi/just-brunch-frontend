export default (state =
  {comments: []
}, action) => {

  switch(action.type) {
    case 'LOADING_COMMENTS':
      return state

    case 'FETCH_COMMENTS':
      return {comments: action.comments}

  default:
    return state;
  }
}
