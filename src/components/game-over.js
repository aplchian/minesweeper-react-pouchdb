import React from 'react'
import {style} from 'glamor'


const GameOver = (props) => {
  let conclusion = props.state === 2 ? 'LOST! 😢' : 'WON! 😃'
  return (
    <div>
      <h1 {...style({textAlign: 'center'})}>YOU {conclusion}</h1>
      <button {...style({display: 'block',margin: '0 auto'})} onClick={props.onClick}>Play Again!</button>
    </div>
  )
}

module.exports = GameOver
