import React from 'react';
import SearchCountry from '../components/SearchCountries/SearchCountry';
import useSearchFetch from '../hooks/useSearchFetch';
import SearchResults from '../components/SearchCountries/SearchResults';
import Countries from '../components/Countries/Countries';
import Filter from '../components/Filter/Filter';
import useFilterFetch from '../hooks/useFilterFetch';
import FilterResults from '../components/Filter/FilterResults';
import Header from '../components/Header';

const Home = () => {
   const { onHandleSubmit, setSearchTerm, searchTerm, error } =
      useSearchFetch();
   const { region, setRegion } = useFilterFetch();

   const renderCountries = () => {
      if (searchTerm) return <SearchResults />;

      if (region) return <FilterResults />;

      return <Countries />;
   };

   return (
      <div className="bg-[#fafafa] dark:bg-[#202c37] min-h-screen">
         <Header />
         <main className="pt-[131px] px-[18px] md:px-[80px]">
            <div className="w-full max-w-[90rem] mx-auto">
               <h1 className="sr-only">Countries around the world!</h1>
               <div className="mb-9 md:flex md:justify-between">
                  <SearchCountry
                     onHandleSubmit={onHandleSubmit}
                     searchTerm={searchTerm}
                     setSearchTerm={setSearchTerm}
                  />
                  <Filter setRegion={setRegion} />
               </div>

               <div className="grid grid-cols-fill-20 gap-x-12 justify-center md:justify-between">
                  {renderCountries()}
                  {error && <div>Can't Find any country</div>}
               </div>
            </div>
         </main>
         <footer className="text-[#111517] dark:text-white pt-[30px] bg-[#fafafa] dark:bg-[#202c37]">
            <div className="text-sm text-center">
               Challenge by
               <a
                  href="https://www.frontendmentor.io/profile/benjoquilario"
                  className="text-[#3e52a3]"
                  target="_blank"
                  rel="noreferrer"
               >
                  Frontend Mentor
               </a>
               . Coded by{' '}
               <a
                  href="https://twitter.com/iam_benjo"
                  className="text-[#3e52a3]"
               >
                  Benjo Quilario
               </a>
               .
            </div>
         </footer>
      </div>
   );
};

export default Home;
