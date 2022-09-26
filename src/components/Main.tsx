import React from 'react'
import { ISafe } from '../types'
import Safe from './Safe'

function Main(props: {safes: ISafe[]}) {
  return (
    <>
      {props.safes.map(safe => {
          const props = {safe: safe }
          return <Safe {...props} />
        }
      )}
    </>
  )
}

export default Main;
