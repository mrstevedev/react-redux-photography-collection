import * as types from "../constants/actionTypes";

export default function setReducer(state = { currentPhoto: {} }, action) {
  switch (action.type) {
    case types.SET_PHOTO:
      return {
        ...state,
        currentPhoto: action.photos.find((photo) => photo.id === action.id)
      };
    default:
      return state;
  }
}
