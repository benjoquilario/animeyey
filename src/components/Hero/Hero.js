import React from 'react';

const Hero = ({ children }) => {
   return (
      <section
         style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), url('/images/background.jpg')`,
            backgroundPosition: '50%',
         }}
         className="shadow-heroShadow h-auto min-h-[80vh] w-full items-center flex flex-wrap justify-center bg-no-repeat bg-cover"
      >
         <div className="w-full max-w-6xl mx-auto flex h-full">
            <div className="w-full flex justify-center items-center content-center">
               <div className="px-[20px] w-full flex flex-wrap justify-center items-center max-w-[100vw]">
                  <div className="w-full text-white text-center ">
                     <h2 className="text-4xl font-semibold tracking-wide">
                        Welcome to Anime
                        <span className="text-[#e74538]">HI</span>
                     </h2>
                     <p className="text-base leading-9 m-4">
                        Millions of anime, manga and characters to discover.
                        Explore now.
                     </p>
                     <p className="m-4 text-base">
                        Developed by Benjo Quilario powered by Jikan API
                     </p>
                  </div>
                  {children}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
