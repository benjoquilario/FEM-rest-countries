import React from 'react';
import SkeletonElement from './SkeletonElement';

const Skeleton = () => {
   return (
      <div className="relative bg-white dark:bg-[#202c37] h-[332px] w-[264px] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] mb-[80px] rounded overflow-hidden">
         <SkeletonElement type="bg-[#f2f2f2] dark:bg-[#2b3945] h-[160px] w-full " />
         <SkeletonElement type="h-[20px] w-[222px] bg-[#f2f2f2] dark:bg-[#2b3945] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] ml-[24px] mr-3 mt-8 rounded" />
         <SkeletonElement type="h-[14px] w-[222px] bg-[#f2f2f2] dark:bg-[#2b3945] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] ml-[24px] mr-3 mt-[12px] mb-1 rounded" />
         <SkeletonElement type="h-[14px] w-[222px] bg-[#f2f2f2] dark:bg-[#2b3945] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] ml-[24px] mr-3 mt-[12px] mb-1 rounded" />
         <SkeletonElement type="h-[14px] w-[222px] bg-[#f2f2f2] dark:bg-[#2b3945] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] ml-[24px] mr-3 mt-[12px] mb-1 rounded" />
      </div>
   );
};

export default Skeleton;
