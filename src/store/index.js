// Create Redux Store 
import { createStore } from 'redux';
import reducer from '../reducers';

// Create the initial state 
const initialState = { 
    photos: [
        {
            photo_1: {
                title: 'Bonita Misty',
                camera_info: {
                    camera: 'Nikon D3300',
                    lcoation: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_2: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    lcoation: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
    ]
}

export const store = createStore(reducer, initialState);