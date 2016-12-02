import React from 'react'
import {style,merge} from 'glamor'

const cell = {
  width: 29,
  height: 29,
  lineHeight: '31px',
  textAlign: 'center',
  cursor: 'pointer',
  display: 'inline-block',
}

const cellStyleClose = style({
  ...cell,
  border: '1px solid grey',
  backgroundColor: 'black',
})

const cellStyleOpen = style({
  ...cell,
  border: '1px solid grey',
  backgroundColor: 'white',
})

const flagged = function(val){
  return style({
    color: val === 0 ? 'black' : 'white'
  })
}

module.exports = (props) => {

  let cellStyle = props.cell.state === 0 ? cellStyleClose : cellStyleOpen
  let coordinates = {x: props.cell.x, y: props.cell.y}
  var adjacent

  if(props.cell.state === 0){
    adjacent = ''
  }else if(props.cell.isMine){
    adjacent = '💣'
  }else {
    adjacent = props.cell.numAdjacentMines === 0 ? '' : props.cell.numAdjacentMines
  }

  if(props.cell.flag === 1){
    adjacent = '🏳'
  }
  return <td {...merge(cellStyle,flagged(props.cell.flag))}
              onContextMenu={props.handleFlag(coordinates)}
              onClick={props.handleClick(coordinates)}>
            {adjacent}
          </td>
}
