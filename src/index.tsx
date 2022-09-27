import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import he from 'javascript-time-ago/locale/he.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(he)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider dir="rtl">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
