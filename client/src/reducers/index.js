import { combineReducers } from 'redux';
import restaurantsReducer from './restaurantsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  comments: commentsReducer
})

export default rootReducer;
