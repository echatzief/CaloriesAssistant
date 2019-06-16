import { combineReducers } from 'redux';
import bmrReducer from './bmrReducer';
import caloriesReducer from './caloriesReducer';

/* Combine all the reducers */
export default combineReducers({
    bmrReducer,
    caloriesReducer,
});
