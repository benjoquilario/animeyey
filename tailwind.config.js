module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         gridTemplateColumns: {
            'fill-20': 'repeat(auto-fill, 140px)',
            'fill-mobile': 'repeat(auto-fill, 112px)',
            'fill-columns': '75px auto',
            'fill-character': 'repeat(auto-fit,minmax(320px,1fr)',
         },
         boxShadow: {
            heroShadow:
               '0 14px 30px rgb(0, 5, 15, 0.1), 0 4px 4px rgb(0, 5, 15, 0.4)',
         },
         colors: {
            'bg-loading': 'rgba(221, 230, 238, 0.8)',
         },
      },
   },
   plugins: [],
};
