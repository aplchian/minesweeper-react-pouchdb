import minesweeper from 'minesweeper'
import {path,map,flatten,compose,reduce,pathOr} from 'ramda'

const initialState = {
    board: {grid(){return []},state(){return ''}},
    score: 0,
    time: 0,
    running: false,
    prevScores: [],
    username: ''
}
const newBoard = () => {
   let mineArray = minesweeper.generateMineArray({
     rows: 10,
     cols: 10,
     mines: 15
   })

   return {
     board: new minesweeper.Board(mineArray),
     time: 0,
     score: 0,
     running: false
   }

 }
const getUpdatedBoard = (board,loc,type) => {
  const count = (acc,item) => item.state === 1 ? ++acc : acc
  if(type === 'open'){
    board.openCell(loc.x,loc.y)
    let score = compose(
      reduce(count,0),
      flatten
    )(board.grid())
    return {
      board: board,
      score: score,
      running: true
    }
  }else if(type === 'flag'){
    board.cycleCellFlag(loc.x,loc.y)
    return {
      board: board,
    }
  }
}


module.exports = {
  initialState,
  newBoard,
  getUpdatedBoard
}
