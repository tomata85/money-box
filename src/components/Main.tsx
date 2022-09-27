import React from 'react'
import { ISafe } from '../types'
import Safe from './Safe'

function Main(props: {safes: ISafe[]}) {
  return (
    <ul>
      {props.safes.map(safe => {
          const props = {safe: safe };
          return (
          <li key={safe.id}>
            <Safe {...props} />
          </li>
        )}
      )}
    </ul>
  )
}

export default Main;
