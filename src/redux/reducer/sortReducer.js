const initialState = {
    sort: ''
  };
  
  const sortReducer = (state = initialState, action) => {
    switch (action.type) {
       case 'GET_SORT_STATE':
         return{
           ...state,
           sort: action.payload
         } 
      default:
        return state;
    }
  };
  
  export default sortReducer;
  