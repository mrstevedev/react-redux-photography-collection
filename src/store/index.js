// Create Redux Store
import { createStore } from "redux";
import reducer from "../reducers";

// Create the initial state
const initialState = {
  imageName: "bonitaskies.jpg",
  imagePath: "./img/bonitaskies.jpg",
};
// const initialState = {
//   photos: [
//     {
//       photo_1: {}
//     },
//     {
//       photo_2: {}
//     },
//     {
//       photo_3: {}
//     },
//     {
//       photo_4: {}
//     }
//   ]
// };

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
