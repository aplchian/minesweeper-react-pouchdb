import {render} from 'react-dom'
import React from 'react'
import App from './app.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducers'

let store = createStore(reducer)


render(
  <App store={store}/>,
  document.getElementById('root')
)
