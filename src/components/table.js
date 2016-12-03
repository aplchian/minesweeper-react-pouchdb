
import React from 'react'
import {style} from 'glamor'
import {map} from 'ramda'
import Cell from './cell'


const rowStyle = style({
  display: 'block',
  height: 31
})

export default (props) => {

  const cells = item => {
    return <Cell cell={item}
                 handleClick={props.handleClick}
                 handleFlag={props.handleFlag} />
  }

  const row = item => {
    return <tr {...rowStyle}>{map(cells,item)}</tr>
  }

  return (
    <tbody>
      {map(row,props.grid)}
    </tbody>
  )

}
