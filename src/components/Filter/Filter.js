import React, { useState } from 'react';
import { optionFilter } from '../../assets';

const Filter = ({ setRegion }) => {
   const [open, setOpen] = useState(false);
   const [selected, setSelected] = useState('Filter by Region');

   const openFilter = () => {
      setOpen(prev => !prev);
   };

   const regionSelected = event => {
      const selectedList = event.target.closest('li');

      if (!selectedList) return;

      setSelected(selectedList.textContent);
   };

   return (
      <div className="w-[200px] relative bg-white rounded shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]">
         <button
            onClick={openFilter}
            aria-label="filter button"
            aria-expanded={open ? true : false}
            className="bg-white dark:bg-[#2b3945] w-full h-full flex py-[14px] px-[20px] justify-between items-center"
         >
            <span className="text-[#111517] dark:text-white font-light text-sm">
               {selected}
            </span>
            <svg
               className="text-[#111517] dark:text-white text-sm w-4 h-4"
               focusable="false"
               viewBox="0 0 24 24"
               aria-hidden="true"
               fill="currentColor"
               stroke="currentColor"
            >
               <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            </svg>
            <ul
               onClick={regionSelected}
               className={`${
                  open ? '' : 'h-0'
               } transition w-[200px] z-5 absolute overflow-hidden rounded top-[55px] left-0 bg-white dark:bg-[#2b3945] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)]`}
            >
               {optionFilter.map(({ id, title }) => {
                  return (
                     <li
                        onClick={e => setRegion(e.target.dataset.value)}
                        data-value={title}
                        key={id}
                        className="text-[#111517] dark:text-white text-left cursor-pointer text-sm py-[8px] px-[26px] first:pt-[20px] first:pb-[8px] first:px-[26px] hover:bg-[#fafafa] hover:dark:bg-[#202c37]"
                     >
                        {title}
                     </li>
                  );
               })}
            </ul>
         </button>
      </div>
   );
};

export default Filter;
