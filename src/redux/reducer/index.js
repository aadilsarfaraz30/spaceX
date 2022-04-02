import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import launchReducer from './launchReducer';
import sortReducer from './sortReducer';

const rootReducer = combineReducers({
  launch: launchReducer,
  filter: filterReducer,
  sort: sortReducer
});

export default rootReducer;