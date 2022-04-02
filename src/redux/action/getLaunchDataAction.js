export function getLaunchData() {
  return {
    type: "GET_LAUNCH_REQUESTED",
  };
}

export function getRocketData(){
  return {
    type: 'GET_ROCKET_REQUESTED'
  }
}

// export function getFilterData(data) {
//   return {
//     type: "GET_FILTER_DATA",
//     payload: data
//   };
// }

export function getFilterState(filter) {
  return {
    type: "GET_FILTER_STATE",
    payload: filter
  };
}

export function getSortState(sort) {
  return{
    type: 'GET_SORT_STATE',
    payload: sort
  }
}

