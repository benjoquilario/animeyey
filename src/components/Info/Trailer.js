import React from 'react';

const Trailer = ({ title, trailer }) => {
   return (
      <div className="mt-[40px]">
         <h4 className="text-center text-white mb-2">Trailer</h4>
         <div className="w-full h-full">
            <iframe
               title={title}
               src={trailer}
               className="max-w-[unset] min-h-[270px] w-full rounded md:max-w-[549px] md:min-h-[389px] mx-auto"
            ></iframe>
         </div>
      </div>
   );
};

export default Trailer;
