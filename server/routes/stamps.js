const express = require('express')

const db = require('../db/stamps')

const router = express.Router()

router.get('/', (req, res) => {
    //need to figure out how to get userId from front?
  return db.getStampsbyId(userId)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
