
import React from 'react'
import {style} from 'glamor'


export default (props) => {
  return <h1 {...style({textAlign: 'center'})}> {props.text} </h1>
}
