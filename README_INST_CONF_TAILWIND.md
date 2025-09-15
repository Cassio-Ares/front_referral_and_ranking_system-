`````````
Install e config 

https://tailwindcss.com/docs/installation/framework-guides/nextjs

npm install tailwindcss @tailwindcss/postcss postcss


file: postcss.config.mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;


file: globals.css

@import "tailwindcss";

e em Layout 

``````````