import * as types from "../constants/actionTypes";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;
import store from "../store";

export const hideSidebar = () => {
  return (dispatch) => {
    dispatch({
      type: types.HIDE_SIDEBAR
    })
    localStorage.removeItem('sidebarRight')
  }
}

export const showSidebar = (e, val) => {
 return (dispatch) => {
   dispatch({
    type: types.SHOW_SIDEBAR,
   })
   localStorage.setItem('sidebarRight', val);
 }
}

export const setPhoto = (e, id, val) => {
  return (dispatch) => {
    dispatch({
      type: types.SET_PHOTO,
      id: id,
      active: val,
      photos: store.getState().photos.photos
    })
   
    localStorage.setItem('active', val);
    const currPhoto = store.getState().photos.photos.find((photo) => photo.id === id)
      localStorage.setItem('cameraInfoContent', 
      JSON.stringify({
        title: currPhoto.title,
        location: currPhoto.location,
        camera: currPhoto.camera,
        imagePath: currPhoto.imagePath
      }))
    }
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
