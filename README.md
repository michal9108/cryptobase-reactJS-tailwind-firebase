using tailwind



$ yarn create react-app crypto-coins-project

Delete:

App.css
App.test.js
logo.svg
reportWebVitals
setupTests.js

index.js > Delete > import reportWebVitals from './reportWebVitals';

App.js > Delete > Boilerplate code  - <header> 

$ yarn start


http://localhost:3000/  -opened on

install CSS tailwind

$ yarn add -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p


Configure your template paths  by copying "./src/**/*.{js,jsx,ts,tsx}"

@tailwind base;
@tailwind components;
@tailwind utilities;

Restart the server yarn start


Additional depandencies:

yarn add reac-router-dom
yarn add dompurify
yarn add axios


CoinGecko API:

Choose free plan

https://www.coingecko.com/en/api

Request URL Retun array of objects - Each objects is gonna be each type of coin








