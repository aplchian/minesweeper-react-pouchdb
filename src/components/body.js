
import React from 'react'
import {style} from 'glamor'

const gridStyle = style({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%,0)',
  minWidth: '320px'
})

export default (props) => (
  <div {...gridStyle}>
    {props.children}
  </div>
)
