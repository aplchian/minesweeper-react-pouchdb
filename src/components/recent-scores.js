
import React from 'react'
import {style} from 'glamor'
import {map} from 'ramda'

export default (props) => {

  const listScores = function(item) {
    return (
      <div {...style({borderBottom: '1px solid rgb(215, 215, 215)', marginBottom: 5})}>
        <span>Username: {item.doc.user === '' ? 'N/A' : item.doc.user}</span>
        <span {...style({float: 'right'})}>Time: {item.doc.time}</span>
        <span {...style({float: 'right', marginRight: 20})}>Score: {item.doc.score}</span>
      </div>
    )
  }

  return (
    <div>
      <h4 { ...style({margin: '3px 0 2px 0'}) }>10 Most Recent Scores</h4>
      <hr />
      {map(listScores,props.prevScores)}
    </div>
  )
}
