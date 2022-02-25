import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCountries } from '../actions';
import axios from '../apis/axios';

const useHomeFetch = () => {
   const [paginateLimit, setPaginateLimit] = useState(12);

   const dispatch = useDispatch();

   useEffect(() => {
      const fetchCountries = async () => {
         const response = await axios.get('/all');

         dispatch(setCountries(response.data));
      };

      fetchCountries();
   }, [dispatch]);

   return { paginateLimit, setPaginateLimit };
};

export default useHomeFetch;
