const initialState = {
  filter: null,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILTER_STATE":
      return {
          ...state,
        filter: action.payload,
      };
     
    default:
      return state;
  }
};

export default filterReducer;
