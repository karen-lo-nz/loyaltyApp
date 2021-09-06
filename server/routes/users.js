const express = require('express')

const db = require('../db/users')

const router = express.Router()

// get all the users in our DB
router.get('/', (req, res) => {
  return db.getUsers()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:userId', (req, res) => {
  return db.getOneUser(req.params.userId)
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email
  }
  return db.addUser(user)
    .then(id => { // returns new user id in an array
      return db.getOneUser(id[0]) // get the added user
    })
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.patch('/update', (req, res) => {
  const user = req.body
  return db.updateUser(user)
    .then(() => { // returns number of user editted,always 1
      return db.getOneUser(user.id) // get the editted user.
    })
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.delete('/delete', (req, res) => {
  return db.deleteUser(req.params.id)
    .then(() => {
      return db.getUsers()
    })
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})
module.exports = router
