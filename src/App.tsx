import React, { useState, useEffect } from 'react';
import { ISafe } from './types'
import Main from './components/Main';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css'

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

const title = 'הבנק של משפחת גונן'

return (
    <>
      <Navbar className="header" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand>🐽 Money Box</Navbar.Brand>
          </Container>
      </Navbar>
      <div className='app-body'>
        <h1 className='app-title'>{title}</h1>
        <Main safes={safes} />
      </div>
    </>
  );
}

export default App;
