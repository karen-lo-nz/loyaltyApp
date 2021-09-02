const express = require('express')

const db = require('../db/users')

const router = express.Router()

//get all the users in our DB
router.get('/', (req, res) => {
  return db.getUsers()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})


router.get('/:userId', (req, res) => {
  return db.getOneUser(req.params.userId)
    .then(results => {
      console.log(results)
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})


router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    phone: req.body.phone,
    email:req.body.email
  }
  return db.addUser(user)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    phone: req.body.phone,
    email:req.body.email,
    id: req.body.userId
  }
  return db.editUser(user)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/:id', (req, res) => {
  return db.deleteUser(req.params.id)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})
module.exports = router
