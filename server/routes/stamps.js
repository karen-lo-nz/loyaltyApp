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


router.get('/:userId', (req, res) => {
  const userId = req.params.userId
  return db.getStampsByUserId(userId)
    .then(results => {
      console.log(results)
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})


//note the shops url here not sure we want it here but the route works
router.get('/shops/:shopId', (req, res) => {
  const shopId = req.params.shopId
  return db.getStampsByShopId(shopId)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})


//this doesnt seem to work? it returns the stamp table but not a new object
router.post('/', (req, res) => {
  const stamp = {
    user_id: req.body.userId,
    shop_id: req.body.shopId
  }

  return db.addStamp(stamp)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const stamp = {
    user_id: req.body.userId,
    shop_id: req.body.shopId
  }

  return db.editStamp(stamp)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/:id', (req, res) => {
  return db.deleteStamp(req.params.id)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})
module.exports = router
