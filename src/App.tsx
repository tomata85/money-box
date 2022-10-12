import React, { useState, useEffect } from 'react';
import { ISafe, ITransaction } from './types';
import Main from './components/Main';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { DB_URL } from './globals';

function App() {
  const [safes, setSafes] = useState<ISafe[]>([]);

  useEffect(() => {
    fetch(`${DB_URL}/safes?_embed=transactions`)
      .then((response) => response.json())
      .then((data) => {
        setSafes(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const addNewTransaction = (tran: ITransaction) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tran)
    };

    fetch(`${DB_URL}/transactions`, requestOptions)
      .catch((err) => {
        console.log(err.message);
      });

    const safe = safes.find(safe => safe.id === tran.safeId);
    safe!.transactions.push(tran);
    setSafes(safes)
  }

  const title = 'הבנק של משפחת גונן'

  return (
      <>
        <Navbar className="suppress-rtl" bg="dark" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand>🐽 Money Box</Navbar.Brand>
            </Container>
        </Navbar>
        <div className='app-body'>
          <h1 className='app-title'>{title}</h1>
          <Main safes={safes} onAddNewTransaction={addNewTransaction} />
        </div>
      </>
    );
}

export default App;
