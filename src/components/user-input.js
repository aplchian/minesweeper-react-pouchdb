
import React from 'react'
import {style} from 'glamor'

export default (props) => (
  <input {...style({margin: '20px 0'})}
    placeholder='Enter UserName'
    value={props.username}
    onChange={props.handleChange} />
)
