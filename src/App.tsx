import React, { useState, useEffect } from 'react';
import { ISafe } from './types'
import Safe from './components/Safe';
import logo from './logo.svg';
import './App.css';

function App() {
  const [safes, setSafes] = useState<ISafe[]>([]);
   useEffect(() => {
      fetch('http://localhost:3000/safes/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setSafes(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{ safes.map(safe => {
          return <>
            <Safe/>
            <li>{safe.name}</li>
          </>
        }) }</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
