/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'min-desktop': '768px',
      },
      colors: {
        'black': 'var(--black)',
        'grey': 'var(--grey)',
        'cream': 'var(--cream)',
        'white': 'var(--white)',
        'green-500': 'var(--green-500)',
        'green-700': 'var(--green-700)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      fontSize: {
        'dekstop-p': '.91rem', 
      }
    },
  },
  variants: {

  },
  plugins: [],
}

    // --grey: hsl(228, 12%, 48%);
    // --cream: hsl(30, 38%, 92%);
    // --white: hsl(0, 0%, 100%);

    // --green-500: hsl(158, 36%, 37%);
    // --green-700: hsl(158, 42%, 18%);