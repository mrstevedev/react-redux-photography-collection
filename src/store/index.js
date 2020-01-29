// Create Redux Store 
import { createStore } from 'redux';
import reducer from '../reducers';

// Create the initial state 
const initialState = { imageName: "bonitaskies.jpg", imagePath: '/img/bonitaskies.jpg' }

export const store = createStore(reducer, initialState);