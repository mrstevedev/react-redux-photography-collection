import fetchReducer from './fetch';
import setReducer from './set';
import { combineReducers } from 'redux';
import sidebarReducer from './sidebar';
import notificationReducer from './notification';

const allReducers = combineReducers({
  photos: fetchReducer,
  currentPhoto: setReducer,
  showSidebar: sidebarReducer,
  hideNotification: notificationReducer
});
export default allReducers;