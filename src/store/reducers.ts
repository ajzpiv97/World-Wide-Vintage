import { combineReducers } from 'redux';
import price from './price/reducer';

const reducers = combineReducers({
  price
});

export default reducers;
