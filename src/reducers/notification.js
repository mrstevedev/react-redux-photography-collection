import * as types from '../constants/actionTypes';

export default function notificationReducer(state = false, action) {
    switch(action.type) {
        case types.CLOSE_NOTIFICATION:
            return state = true
        default:
            return state
    }
}