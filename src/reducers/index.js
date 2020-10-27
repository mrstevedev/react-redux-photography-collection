import fetchReducer from './fetch';
import setReducer from './set';
import { combineReducers } from 'redux';
import toggleReducer from './toggle';

const allReducers = combineReducers({
  photos: fetchReducer,
  currentPhoto: setReducer,
  toggle: toggleReducer
});
export default allReducers;