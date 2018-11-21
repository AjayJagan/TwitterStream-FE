import { combineReducers } from 'redux';
import {TweetReducer} from './reducers/Tweet/TweetReducer';

export default combineReducers({
  tweet:TweetReducer,
});