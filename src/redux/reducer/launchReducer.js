const initialState = {
  launchData: [],
  loading: false,
  error: null,
  rocketData: []
};

const launchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LAUNCH_REQUESTED":
      return {
        ...state,
        loading: true,
      };

    case "GET_LAUNCH_SUCCESS":
      return {
        ...state,
        loading: false,
        launchData: action.launch,
      };
case "GET_ROCKET_SUCCESS":
  return{
    ...state,
    loading: false,
    rocketData: action.rocket
  }

    case "GET_FILTER_DATA":
      return {
        ...state,
        loading: false,       
        launchData: action.payload
      };
    case "GET_LAUNCH_FAILED":
      return { ...state, loading: false, error: action.message };
    case "GET_ROCKET_FAILED":
      return { ...state, loading: false, error: action.message };
    default:
      return state;
  }
};

export default launchReducer;
