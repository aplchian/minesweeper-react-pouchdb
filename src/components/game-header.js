import React from 'react'
import {style} from 'glamor'

const chickyStyle = style({
   position: 'absolute',
   left: '50%',
   transform: 'translate(-50%,0)',
   cursor:'pointer'
})

module.exports = props =>
  <div {...style({display: 'block',margin: '0 auto', height: 32})}>
    <span {...style({marginRight: 12})}>Score: {props.score}</span>
    <span {...style({float: 'right'})}>Timer: {props.time}</span>
    <span {...chickyStyle} onClick={props.resetGame}>🐣</span>
  </div>
