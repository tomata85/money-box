import React from 'react'
import { ISafe } from '../types'
import Safe from './Safe'
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Main(props: {safes: ISafe[]}) {
  return (
    <>
      <Navbar className="header" bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand>🐽 Money Box</Navbar.Brand>
          </Container>
      </Navbar>
      <CardGroup>
        {props.safes.map(safe => {
            const props = {safe: safe };
            return (<Safe key={safe.id} {...props} />)}
        )}
      </CardGroup>
    </>
  )
}

export default Main;
