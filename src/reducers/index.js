export default (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SET_INFO":
      return {
        ...state,
        photo: action.photo
      };
      default:
          return state;
  }
};
