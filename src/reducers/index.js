export default (state, action) => {
  console.log(state, action);
  switch (action.type) {
      case "SET_PHOTO": 
        return {
          ...state,
          photo: action.photo
        }
      default:
          return state;
  }
};
