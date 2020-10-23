import { SET_PHOTO } from '../constants/actionTypes';

export function setPhoto(e, id, val) {
    return {
        type: SET_PHOTO,
        id: id,
        href: val
    }
}