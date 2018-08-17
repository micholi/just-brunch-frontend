export default (state = [], action) => {
  switch(action.type) {

    case 'LOADING_COMMENTS':
      return state

    case 'FETCH_COMMENTS':
      return action.comments

    case 'ADD_COMMENT':
      return {comments: [...state.comments, action.comment]}

  default:
    return state;
  }
}
