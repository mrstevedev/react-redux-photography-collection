import fetchReducer from './fetch';
import setReducer from './set';
import { combineReducers } from 'redux';
import sidebarReducer from './sidebar';

const allReducers = combineReducers({
  photos: fetchReducer,
  currentPhoto: setReducer,
  showSidebar: sidebarReducer
});
export default allReducers;