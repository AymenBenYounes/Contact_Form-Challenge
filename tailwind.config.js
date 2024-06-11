/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        container:"90%",
        DesktopContainer:"50%",
        MoreHalf: "70%",
        half: "48%"
      },
      colors:{
        "Light-green": "hsl(148, 38%, 91%)",
        "Medium-green": "hsl(169, 82%, 27%)",
        "Red": "hsl(0, 66%, 54%)",
        "White": "hsl(0, 0%, 100%)",
        "Medium-grey": "hsl(186, 15%, 59%)",
        "Dark-grey": "hsl(187, 24%, 22%)"
      },
      fontFamily:{
        Karla:["Karla", "sans-serif"],
      }
    },
  },
  plugins: [],
}

