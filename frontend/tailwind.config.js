module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    // colors: {
    //   'slate':{
    //     '50':'#f8fafc',
    //     '100':'#f1f5f9',
    //     '200':'#e2e8f0',
    //     '300':'#cbd5e1',
    //     '400':'#94a3b8',
    //     '500':'#64748b'

    //   }
    // },
    // backgroundImage:{
    //   'slider':'./src/components/assets/slider2.jpg'
    // },

    extend: {
      screens:{
        'mobile':'360px',
        'tablet':'500px',
        'medium':'740px'
      },
    },
  },
  plugins: [],
}