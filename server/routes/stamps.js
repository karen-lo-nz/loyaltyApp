const express = require('express')

const db = require('../db/stamps')

const router = express.Router()

//get all the stamps in our DB
router.get('/', (req, res) => {
  return db.getStamps()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

//note the users url after stamps here not sure we want it here or in the users routes but the route works
router.get('/users/:id', (req, res) => {
  return db.getStampsByUserId(req.params.id)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})


//note the shops url after stamps here not sure we want it here or in the shops routes but the route works
router.get('/shops/:id', (req, res) => {
  return db.getStampsByShopId(req.params.id)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const stamp = {
    user_id: req.body.user_id,
    shop_id: req.body.shop_id
  }
  return db.addStamp(stamp)
    .then(id => { // returns new stamp id in an array
      return db.getOneStamp(id[0]) //get the added stamp 
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const stamp = {
    id: req.params.id,
    user_id: req.body.user_id,
    shop_id: req.body.shop_id
  }
  return db.editStamp(stamp)
    .then(() => { // returns number of stamp editted,always 1
      return db.getOneStamp(stamp.id) //get the editted stamp. 
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.delete('/:id', (req, res) => {
  return db.deleteStamp(req.params.id)
  .then(() => {
    return db.getStamps()
  })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})
module.exports = router
