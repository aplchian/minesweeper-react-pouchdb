import React from 'react'
import minesweeper from 'minesweeper'
import {path,map,flatten,compose,reduce,pathOr} from 'ramda'
import {style} from 'glamor'
import GameOver from './components/game-over'
import GameHeader from './components/game-header'
import PouchDB from 'pouchdb'
import Title from './components/title.js'
import UserInput from './components/user-input'
import Body from './components/body'
import Table from './components/table'
import RecentScores from './components/recent-scores'
import {getScores, addScore} from './helpers/db.js'
import {initialState, newBoard, getUpdatedBoard} from './helpers/helpers'
import actions from './actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


const App = React.createClass({
  getInitialState(){
    console.log('init',this.props)
    return({...this.props.board})
  },
  componentDidMount(){
    console.log('helloo',this.props)
    this.resetGame()
    this.updateScores()
  },
  resetGame(){
    this.setState({
      ...newBoard()
    })
  },
  updateScores(){
    getScores( (err,res) => {
      if(err) return console.log(err.message)
      this.setState({
        prevScores: res
      })
    })
  },
  handleClick(loc){
    return e => {
      let newBoard = getUpdatedBoard(this.state.board,loc,'open')
      this.setState({
        ...newBoard
      })
      this.startTimer()
    }
  },
  handleFlag(loc){
    return e => {
      e.preventDefault()
      let newBoard = getUpdatedBoard(this.state.board,loc,'flag')
      this.setState({
        ...newBoard
      })
    }
  },
  handleChange(e){
    this.setState({
      username: e.target.value
    })
  },
  checkEnd(state){
    if(state === 1 || state === 0){
      return ''
    }else {
      return <GameOver onClick={this.resetGame} state={this.state.board.state()} />
    }
  },
  startTimer(){
    const fn = () => {
      this.props.actions.incrementTime()
    }
    if(!this.state.running){
      this.interval = setInterval(fn,1000)
    }
    if(this.state.board.state() === 2){
      clearInterval(this.interval)
      addScore(this.state,(err,res) => {
        if (err) return console.log(err.message)
        this.updateScores()
      })
    }
  },
  componentWillReceiveProps(nextProps){
    this.setState({
      time: nextProps.board.time
    })
  },
  render(){
    console.log('log',this.props.board)
    let endState = this.checkEnd(this.state.board.state())
    let grid = this.state.board.grid()
    return(
      <div>
        <Title text="Mine Sweeper"/>
        <Body>
            <GameHeader score={this.state.score} time={this.state.time} resetGame={this.resetGame}/>
            <Table grid={grid} handleClick={this.handleClick} handleFlag={this.handleFlag}/>
            {endState}
            <UserInput username={this.state.username} handleChange={this.handleChange} />
            <RecentScores prevScores={this.state.prevScores}/>
        </Body>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return { board: state.board }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchtoProps
)(App)
