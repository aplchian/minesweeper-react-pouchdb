
module.exports = {
  updateBoard(board){
    return{
      type: 'UPDATE_BOARD',
      board: board
    }
  },
  incrementTime(){
    return{
      type: 'INCREMENT_TIME',
    }
  }
}
