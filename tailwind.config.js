module.exports = {
   important: true,
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: 'class', // or 'media' or 'class'
   theme: {
      extend: {
         gridTemplateColumns: {
            'fill-20': 'repeat(auto-fill, 16.5rem)',
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
