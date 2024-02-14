/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
  backgroundImage: theme => ({
    'gradient-to-45': 
        'linear-gradient(90deg, #000000, #ffffff)',
    'gradient-to-135': 
        'linear-gradient(45deg, #000000, #ffffff)',
  })
},
},
  plugins: [],
}

