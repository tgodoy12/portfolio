import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/App.js';
import injectContext from './js/store/appContext.js';
import reportWebVitals from './reportWebVitals.js';

const Layout = injectContext(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Layout/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
