import fetchReducer from './fetch';
import setReducer from './set';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  photos: fetchReducer,
  currentPhoto: setReducer
});
export default allReducers;