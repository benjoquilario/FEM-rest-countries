import { combineReducers } from 'redux';
import {
   countriesReducer,
   filterReducer,
   searchReducer,
   visitedCountry,
} from './countriesReducers';

export default combineReducers({
   countries: countriesReducer,
   search: searchReducer,
   filter: filterReducer,
   country: visitedCountry,
});
