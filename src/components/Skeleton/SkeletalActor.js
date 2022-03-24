import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletalActor = () => {
   return (
      <div className="relative h-[90px] w-full shadow-[0_0_12px_-5px_rgba(0,0,0,0.2)] rounded overflow-hidden">
         <SkeletonElement type="bg-[#152232] h-[90px] w-full " />
      </div>
   );
};

export default SkeletalActor;
