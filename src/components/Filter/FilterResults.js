import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from '../Skeleton/Skeleton';
import { convertPopulation } from '../../helper';

const FilterResults = () => {
   const countries = useSelector(state => state.filter.filteredCountry);

   return (
      <React.Fragment>
         {!countries ||
            (Array.isArray(countries) &&
               countries.length === 0 &&
               Array.from(Array(12), (_, i) => <Skeleton key={i} />))}
         {countries.map((country, index) => {
            const { name, flag, capital, population, region } = country;

            return (
               <div
                  key={index}
                  className="bg-white dark:bg-[#2b3945] rounded overflow-hidden text-[#111517] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] mb-[80px]"
               >
                  <Link to={`/${name}`}>
                     <img
                        src={flag}
                        className="object-cover w-full h-[160px]"
                        alt={name}
                     />
                  </Link>
                  <div className="w-full pt-8 pl-8">
                     <Link
                        to={`/${name}`}
                        className="text-[#111517] dark:text-white font-extrabold text-lg"
                     >
                        {name}
                     </Link>
                  </div>
                  <div className="pt-4 pb-6 pl-8 text-[#111517] dark:text-white">
                     <ul className="text-sm">
                        <li className="mb-1">
                           <span className="font-semibold">Population : </span>
                           <span>{convertPopulation(population)}</span>
                        </li>
                        <li className="mb-1">
                           <span className="font-semibold">Region : </span>
                           <span>{region}</span>
                        </li>
                        <li className="mb-1">
                           <span className="font-semibold">Capital : </span>
                           <span>{capital}</span>
                        </li>
                     </ul>
                  </div>
               </div>
            );
         })}
      </React.Fragment>
   );
};

export default FilterResults;
