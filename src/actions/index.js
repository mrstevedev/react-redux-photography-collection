import * as types from "../constants/actionTypes";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export function setPhoto(e, id, val) {
  return {
    type: SET_PHOTO,
    id: id,
    href: val,
  };
}

// Async action
export const fetchPhotos = () => {
  return (dispatch) => {
    axios
      .get(`${REACT_APP_API_URL}/photos`, {
        headers: {
          requestapi: "123",
        },
      })
      .then((res) => {
        dispatch({
          type: types.LOAD_PHOTOS_SUCCESS,
          payload: res.data,
        });
      });
  };
};
