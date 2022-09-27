import React, { useState, useEffect } from 'react';
import { ISafe } from './types'
import Main from './components/Main';

function App() {
  const [safes, setSafes] = useState<ISafe[]>([]);
   useEffect(() => {
      fetch('https://money-box-db.herokuapp.com/safes?_embed=transactions')
         .then((response) => response.json())
         .then((data) => {
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
