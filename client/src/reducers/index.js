import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import commentsReducer from './commentsReducer';

export default comibineReducers({
  restaurants: restaurantsReducer,
  comments: commentsReducer
})
