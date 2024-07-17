/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary : '#4338ca',
        dark : '#1e293b',
        lightdark :'#64748b',
        secondary : '#1e293b',
      },
      screens:{
        '2xl' : '1320px',
      }
    },
  },
  plugins: [],
}

