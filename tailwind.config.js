/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      colors: {
          primary:'#292d34',
          secondary:'#7c828d',
          gray:'#b9bec7',
          pink:'#DE1798',
          blue:'#8ed1fc',
          bg:' hsla(0,0%,100%,.55)',
          gray1:'#FAFBFC',
          green:'#Bcc967',
          sky:'#7af8ff',
          gray2:'#647982',
          blue1:'#2680ff',
          purple:'#7b68ee',
          bg2:'#EDF8FE',
          green:'#7AFFD9',
          yellow:'#FFD042',
          gray3:'#e9ebf0',
          gray4:'#F6F7F9',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      blur: {
        xl: '200px',
      }
    },
  },
  plugins: [],
}