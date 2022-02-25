import {
   SET_COUNTRIES,
   SEARCH_COUNTRIES,
   FILTER_COUNTRIES,
   REMOVE_FILTERED,
   VISITED_COUNTRY,
   REMOVE_VISITED,
} from '../actions/types';

const initialState = {
   countries: [],
   filteredCountry: [],
};

export const countriesReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_COUNTRIES:
         return { ...state, countries: [...action.payload] };
      default:
         return state;
   }
};

export const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEARCH_COUNTRIES:
         return { ...state, countries: [...action.payload] };
      default:
         return state;
   }
};

export const filterReducer = (state = initialState, action) => {
   switch (action.type) {
      case FILTER_COUNTRIES:
         return { ...state, filteredCountry: [...action.payload] };
      case REMOVE_FILTERED:
         return { filteredCountry: [] };
      default:
         return state;
   }
};

export const visitedCountry = (state = {}, action) => {
   switch (action.type) {
      case VISITED_COUNTRY:
         return { ...state, ...action.payload };
      case REMOVE_VISITED:
         return {};
      default:
         return state;
   }
};
