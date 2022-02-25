import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchCountries } from '../actions';
import axios from '../apis/axios';

const useHomeFetch = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
   const [error, setError] = useState(false);

   const dispatch = useDispatch();

   useEffect(() => {
      const timerId = setTimeout(() => {
         setDebouncedTerm(searchTerm);
      }, 2000);

      return () => clearTimeout(timerId);
   }, [searchTerm]);

   useEffect(() => {
      const fetchSearchCountries = async () => {
         try {
            setError(false);
            const response = await axios.get(`/name/${debouncedTerm}`);

            dispatch(searchCountries(response.data));
         } catch (err) {
            setError(true);
            console.error(err);
         }
      };

      if (!debouncedTerm) return;

      fetchSearchCountries();
   }, [debouncedTerm, dispatch]);

   const onHandleSubmit = event => {
      event.preventDefault();
   };

   return {
      onHandleSubmit,
      searchTerm,
      setSearchTerm,
      error,
   };
};

export default useHomeFetch;
