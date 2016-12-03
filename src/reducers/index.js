import {combineReducers} from 'redux'

const initialState = {
    board: {grid(){return []},state(){return ''}},
    score: 0,
    time: 0,
    running: false,
    prevScores: [],
    username: ''
}

const board = function(state = initialState, action){
  switch(action.type){
    case 'UPDATE_BOARD':
      return Object.assign({},state,{
        ...state,
        board: action.board
      })
    case 'INCREMENT_TIME':
      return Object.assign({},state,{
        ...state,
        time: state.time + 1
      })
    default: return state
  }
}


const MainReducer = combineReducers({
  board
})

module.exports = MainReducer
