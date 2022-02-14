module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {

      
        zIndex: {
          '100': '100',
        } ,
        width: {
          "1/2": "50%",
          "1/3": "33.333333%",
          "2/3": "66.666667%",
          '6/6': '86.666667%',
      },
    }} , 
    plugins: [],
  }