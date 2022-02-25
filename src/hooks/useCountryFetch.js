import { useEffect, useState } from 'react';
import axios from '../apis/axios';
import { visitedCountry, removeVisitedCountries } from '../actions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const useCountryFetch = () => {
   const { name } = useParams();

   const [error, setError] = useState(false);

   const dispatch = useDispatch();

   useEffect(() => {
      const fetchVisitedCountries = async () => {
         try {
            setError(false);

            const response = await axios.get(`/name/${name}`);

            dispatch(visitedCountry(response.data[0]));
         } catch (err) {
            setError(true);
            console.error(err);
         }
      };

      fetchVisitedCountries();

      return () => dispatch(removeVisitedCountries());
   }, [name, dispatch]);

   return error;
};

export default useCountryFetch;
