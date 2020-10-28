import * as types from '../constants/actionTypes';

export default function sidebarReducer(state = false, action) {
    switch(action.type) {
        case types.SHOW_SIDEBAR:
            return state = true
        default:
            return state
    }
}
