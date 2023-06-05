/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#9775FF",
        
"secondary": "#f774f2",
        
"accent": "#F9F8FF",
        
"neutral": "#22192E",
        
"base-100": "#EBEBEB",
        
"info": "#88C3E2",
        
"success": "#48EAC4",
        
"warning": "#ECCE36",
        
"error": "#F8546F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

