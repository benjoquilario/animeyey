import React from 'react';
import SkeletonElement from './SkeletonElement';

const Skeleton = () => {
   return (
      <div className="relative h-[160px] sm:h-[264px] w-[112px] sm:w-[150px] shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] rounded overflow-hidden mx-auto">
         <SkeletonElement type="bg-[#152232] h-[160px] sm:h-[225px] w-[112px] sm:w-[150px] mx-auto" />
      </div>
   );
};

export default Skeleton;
