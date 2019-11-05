const initialState = {
  randomText: [],
  showLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_RANDOM_TEXT":
      return {
        ...state,
        showLoading: true
      };
    case "FETCH_RANDOM_TEXT_SUCCESS":
      console.log("dsdsd", action.payload.randomText);
      return {
        ...state,
        randomText: action.payload.randomText,
        showLoading: false
      };
    case "FETCH_RANDOM_TEXT_ERROR":
      return {
        ...state,
        showLoading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default reducer;
