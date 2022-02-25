import React from 'react';
import useCountryFetch from '../hooks/useCountryFetch';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Spinner from '../components/Spinner/Spinner';
import { convertPopulation } from '../helper';

const VisitedCountry = () => {
   const error = useCountryFetch();

   const visitedCountry = useSelector(state => state.country);

   const {
      name,
      flag,
      borders,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
   } = visitedCountry;

   return (
      <div className="bg-[#fafafa] dark:bg-[#202c37] min-h-screen">
         <Header />
         <main className="pt-[167px] px-[18px] md:px-[80px]">
            <div className="w-full max-w-[90rem] mx-auto">
               <div>
                  <Link
                     to="/"
                     className="bg-white dark:bg-[#2b3945] text-[#111517] dark:text-white rounded shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] py-[10px] px-[24px] flex w-[130px] justify-center gap-x-3"
                  >
                     <svg
                        width="18"
                        height="18"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        stroke="currentColor"
                     >
                        <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                     </svg>
                     Back
                  </Link>
               </div>

               <div className="mt-16">
                  <div className="md:flex md:gap-32">
                     {error && <div>Error Please try Again</div>}
                     {Object.keys(visitedCountry).length === 0 ? (
                        <Spinner />
                     ) : (
                        <React.Fragment>
                           <div
                              className="md:basis-6/12"
                              style={{
                                 height: 'clamp(229px,30vw,400px)',
                                 width: 'clamp(343.5px,43vw, 602px)',
                              }}
                           >
                              <img
                                 src={flag}
                                 className="h-[229px] object-cover md:h-full md:w-full"
                                 alt={name}
                              />
                           </div>
                           <div className="mt-8 md:mt-12 md:basis-6/12">
                              <h1 className="mb-6 text-lg md:text-3xl text-[#111517] dark:text-white font-extrabold">
                                 {name}
                              </h1>
                              <div className="flex flex-col md:grid md:grid-cols-2">
                                 <ul className="">
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Native Name :{' '}
                                       </span>
                                       <span>{nativeName}</span>
                                    </li>
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Population :{' '}
                                       </span>
                                       <span>
                                          {convertPopulation(population)}
                                       </span>
                                    </li>
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Region :{' '}
                                       </span>
                                       <span>{region}</span>
                                    </li>
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Sub Region :{' '}
                                       </span>
                                       <span>{subregion}</span>
                                    </li>
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Capital :{' '}
                                       </span>
                                       <span>{capital}</span>
                                    </li>
                                 </ul>
                                 <ul className="mt-8 md:mt-0">
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Top Level Domain :{' '}
                                       </span>
                                       {topLevelDomain.map((domain, index) => {
                                          return (
                                             <span key={index}>{domain}</span>
                                          );
                                       })}
                                    </li>
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Currencies :{' '}
                                       </span>
                                       {currencies.map((currency, index) => {
                                          return (
                                             <span key={index}>
                                                {currency.name}
                                             </span>
                                          );
                                       })}
                                    </li>
                                    <li className="mb-4 text-[#111517] dark:text-white text-[15.4px]">
                                       <span className="font-semibold">
                                          Languages :{' '}
                                       </span>
                                       {languages.map((language, index) => {
                                          return (
                                             <span key={index}>
                                                {language.name},
                                             </span>
                                          );
                                       })}
                                    </li>
                                 </ul>

                                 <div className="pt-9 md:basis-6/12 md:flex md:row-[span_2_/_span_3] md:col-[span_2_/_span_3]">
                                    <h3 className="mb-6 md:mb-0 text-lg md:text-md text-[#111517] dark:text-white font-extrabold">
                                       Border countries
                                    </h3>
                                    <ul className="flex flex-wrap gap-3">
                                       {borders
                                          ? borders.map((border, index) => {
                                               return (
                                                  <li
                                                     key={index}
                                                     className="shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] py-1.5 px-6"
                                                  >
                                                     <Link
                                                        to={`/${border}`}
                                                        className="text-xs"
                                                     >
                                                        {border}
                                                     </Link>
                                                  </li>
                                               );
                                            })
                                          : null}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </React.Fragment>
                     )}
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
};

export default VisitedCountry;
