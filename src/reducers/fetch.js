import * as types from "../constants/actionTypes";

export default function fetchReducer(state = { photos: "" }, action) {
  switch (action.type) {
    case types.LOAD_PHOTOS_SUCCESS:
      return { 
        ...state, 
        photos: action.payload
    };
    default:
      return state;
  }
};

