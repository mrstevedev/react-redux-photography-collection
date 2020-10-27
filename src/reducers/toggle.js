import * as types from '../constants/actionTypes';

export default function toggleReducer(state = false, action) {
    switch(action.type) {
        case types.TOGGLE_PHOTO_INFO:
            return state = true
        default:
            return state
    }
}
