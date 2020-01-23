// Create Redux Store 
import { createStore } from 'redux';
import reducer from '../reducers';

// Create the initial state 
const initialState = { 
    photos: [
        {
            photo_1: {
                id: '1',
                title: 'Bonita Misty',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3',
                    imageSrc: '/img/bonitaskies.jpg'
                }
            }
        },
        {
            photo_2: {
                id: '2',
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_3: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_4: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_5: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_6: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_7: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_8: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_9: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_10: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_11: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
        {
            photo_12: {
                title: 'Bonita Early Morning',
                camera_info: {
                    camera: 'Nikon D3300',
                    location: 'Eastlake',
                    settings: 'M 1/25 F3'
                }
            }
        },
    ]
}

export const store = createStore(reducer, initialState);