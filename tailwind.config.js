// const bgImg = 'https://picsum.photos/200/300'
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       height:{
         100:'40rem'
       },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }