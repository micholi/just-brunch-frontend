export default (state = [], action) => {
  switch(action.type) {

    case 'LOADING_COMMENTS':
      return state

    case 'FETCH_COMMENTS':
      return action.comments

    case 'ADD_COMMENT':
      // not sure why this line of code doesn't work
      return {comments: [...state.comments, action.comment]};
      // this appears to work
      return state.concat(action.comment);

  default:
    return state;
  }
}
