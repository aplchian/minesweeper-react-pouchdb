import React from 'react'
import minesweeper from 'minesweeper'
import {path,map,flatten,compose,reduce,pathOr} from 'ramda'
import {style} from 'glamor'
import Cell from './components/cell'
import GameOver from './components/game-over'
import GameHeader from './components/game-header'
import PouchDB from 'pouchdb'
const db = new PouchDB('scores');


const rowStyle = style({
  display: 'block',
  height: 31
})

const gridStyle = style({
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%,0)',
  minWidth: '320px'
})

const App =React.createClass({
  getInitialState(){
    return({
      board: {
        grid(){
          return []
        },
        state(){
          return ''
        }
      },
      score: 0,
      time: 0,
      running: false,
      prevScores: [],
      username: ''
    })
  },
  resetGame(){
    let mineArray = minesweeper.generateMineArray({
      rows: 10,
      cols: 10,
      mines: 15
    })
    let board = new minesweeper.Board(mineArray)
    clearInterval(this.interval)
    this.setState({
      board: board,
      time: 0,
      score: 0,
      running: false
    })
  },
  updateScores(){
    let prevScores
    db.allDocs({limit: 10,include_docs: true, descending: true}, (err,res) => {
      if(err) return console.log(err)
      prevScores = res.rows
      this.setState({
        prevScores: prevScores
      })
    })
  },
  componentDidMount(){
    this.resetGame()
    this.updateScores()
  },
  handleClick(loc){
    return e => {
      let board = this.state.board
      board.openCell(loc.x,loc.y)
      this.startTimer()
      const count = (acc,item) => item.state === 1 ? ++acc : acc
      let score = compose(
        reduce(count,0),
        flatten
      )(board.grid())
      this.setState({
        board: board,
        score: score,
        running: true
      })
    }
  },
  handleFlag(loc){
    return e => {
      e.preventDefault()
      let board = this.state.board
      board.cycleCellFlag(loc.x,loc.y)
      this.setState({
        board: board
      })
    }
  },
  handleChange(e){
    this.setState({
      username: e.target.value
    })
  },
  checkState(state){
    if(state === 1 || state === 0){
      return ''
    }else {
      return <GameOver onClick={this.resetGame} state={this.state.board.state()} />
    }
  },
  startTimer(){

    const fn = () => {
      let time = this.state.time + 1
      this.setState({
        time: time
      })
    }

    if(!this.state.running){
      this.interval = setInterval(fn,1000)
    }

    if(this.state.board.state() === 2){
      clearInterval(this.interval)
      let score = {
        _id: new Date().toISOString(),
        score: this.state.score,
        time:this.state.time,
        user: this.state.username
      }
      db.put(score,(err,res) => {
        if (err) return console.log(err.message)
        if(res) {
          this.updateScores()
          return console.log(res)
        }
      })
    }

  },
  render(){
    console.log(this.state)
    let state = this.checkState(this.state.board.state())
    let grid = this.state.board.grid()

    const cells = item => {
      return <Cell cell={item}
                   handleClick={this.handleClick}
                   handleFlag={this.handleFlag} />
    }

    const row = item => {
      return <tr {...rowStyle}> {map(cells,item)} </tr>
    }

    const listScores = function(item) {
      return (
        <div {...style({borderBottom: '1px solid rgb(215, 215, 215)', marginBottom: 5})}>
          <span>Username: {item.doc.user === '' ? 'N/A' : item.doc.user}</span>
          <span {...style({float: 'right'})}>Time: {item.doc.time}</span>
          <span {...style({float: 'right', marginRight: 20})}>Score: {item.doc.score}</span>
        </div>
      )
    }

    return(
      <div>
        <h1 {...style({textAlign: 'center'})}>MineSweeper!</h1>
        <div {...gridStyle}>
          <GameHeader score={this.state.score} time={this.state.time} resetGame={this.resetGame}/>
          <table>
            {map(row,grid)}
          </table>
          {state}
          <input {...style({margin: '20px 0'})}
            placeholder='Enter UserName'
            value={this.state.username}
            onChange={this.handleChange}></input>
          <h4 { ...style({margin: '3px 0 2px 0'}) }>10 Most Recent Scores</h4>
          <hr />
          {map(listScores,this.state.prevScores)}
        </div>
      </div>

    )
  }
})

module.exports = App
