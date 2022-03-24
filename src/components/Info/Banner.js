import React from 'react';

const Banner = ({ poster }) => {
   const bannerShadow = {
      background:
         'linear-gradient(180deg,rgba(6,13,34,0) 40%,rgba(6,13,34,.8))',
   };
   return (
      <div
         className="bg-[50% 30%] bg-no-repeat bg-cover h-[400px] mt-[-50px] max-w-screen-2xl"
         style={{
            backgroundImage: `url('${poster}')`,
            backgroundPosition: `50% 35%`,
         }}
      >
         <div className="w-full h-full" style={bannerShadow}></div>
      </div>
   );
};

export default Banner;
