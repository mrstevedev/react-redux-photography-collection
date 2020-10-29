import * as types from '../constants/actionTypes';

export default function notificationReducer(state = 'hide', action) {
    switch(action.type) {
        case types.CLOSE_NOTIFICATION:
            return state = 'hide'
        case types.SHOW_NOTIFICATION:
            return state = 'show'
        default:
            return state
    }
}