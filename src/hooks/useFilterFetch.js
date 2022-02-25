import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../apis/axios';
import { filteredCountries, removeFilteredCountries } from '../actions';

const useFilterFetch = () => {
   const [region, setRegion] = useState('');

   const dispatch = useDispatch();

   useEffect(() => {
      const fetchRegion = async () => {
         const response = await axios.get(`/region/${region}`);

         dispatch(filteredCountries(response.data));
      };

      if (!region) return;

      fetchRegion();

      return () => dispatch(removeFilteredCountries());
   }, [region, dispatch]);

   return { region, setRegion };
};

export default useFilterFetch;
