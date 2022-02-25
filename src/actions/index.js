import {
   FILTER_COUNTRIES,
   SEARCH_COUNTRIES,
   SET_COUNTRIES,
   VISITED_COUNTRY,
   REMOVE_FILTERED,
   REMOVE_VISITED,
} from './types';

export const setCountries = countries => {
   return {
      type: SET_COUNTRIES,
      payload: countries,
   };
};

export const searchCountries = countries => {
   return {
      type: SEARCH_COUNTRIES,
      payload: countries,
   };
};

export const visitedCountry = country => {
   return {
      type: VISITED_COUNTRY,
      payload: country,
   };
};

export const filteredCountries = countries => {
   return {
      type: FILTER_COUNTRIES,
      payload: countries,
   };
};

export const removeFilteredCountries = countries => {
   return {
      type: REMOVE_FILTERED,
      payload: countries,
   };
};

export const removeVisitedCountries = () => {
   return {
      type: REMOVE_VISITED,
   };
};
