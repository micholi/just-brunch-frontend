import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
  restaurants: restaurantsReducer,
  comments: commentsReducer
})
