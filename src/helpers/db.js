
import PouchDB from 'pouchdb'
const db = new PouchDB('scores')


const getScores = (cb) => {
  db.allDocs({limit: 10,include_docs: true, descending: true}, (err,res) => {
    if(err) return cb(err)
    return cb(null,res.rows)
  })
}

const addScore = (state,cb) => {
  let score = {
    _id: new Date().toISOString(),
    score: state.score,
    time: state.time,
    user: state.username
  }
  console.log('score',score)
  db.put(score,(err,res) => {
    if (err) return cb(err)
    cb(null,res)
  })
}

module.exports = {
  getScores,
  addScore
}
