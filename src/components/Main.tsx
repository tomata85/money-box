import React from 'react'
import { ISafe } from '../types'
import Safe from './Safe'
import CardGroup from 'react-bootstrap/CardGroup';

function Main(props: {safes: ISafe[]}) {
  return (
    <>
      <CardGroup className="card-list">
        {props.safes.map(safe => {
            const props = {safe: safe };
            return (<Safe key={safe.id} {...props} />)}
        )}
      </CardGroup>
    </>
  )
}

export default Main;
