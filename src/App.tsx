import React, { useState, useEffect } from 'react';
import { ISafe } from './types'
import Safe from './components/Safe';
import Main from './components/Main';
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
      <Main safes={safes} />
    </div>
  );
}

export default App;
