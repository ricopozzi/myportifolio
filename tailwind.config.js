module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      keyframes: {
        translay: {
          '0%': { transform: 'translate(0px,0px)' },
          '30%': { transform: 'translate(30px, 40px)' },
          '50%': {transform: 'translate(-50px, 80px)'},
          '80%': {transform: 'translate(-20px, 40px)'},
          '100%': {transform:'translate(0px, 0px)'}
        }
    },
    animation:{
      'translay': 'translay 3s ease infinite'
    },
    fontFamily: {
      'DMSerif':['DM Serif Display'],
      'DMSans': ['DM Sans']
    },
    backgroundImage: {
      'mountain':"url('/mountain.svg')"
    }
  },
},
  plugins: [
    require('tailwind-scrollbar')
  ],
}
