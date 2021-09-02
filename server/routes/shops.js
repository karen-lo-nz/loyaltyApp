const express = require('express')

const db = require('../db/shops')

const router = express.Router()

//get all the shops in our DB
router.get('/', (req, res) => {
  return db.getShops()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})


router.get('/:shopId', (req, res) => {
  return db.getOneShop(req.params.shopId)
    .then(results => {
      console.log(results)
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})


router.post('/', (req, res) => {
  const shop = {
    name: req.body.name,
    address: req.body.address,
    email:req.body.email
  }
  return db.addShop(shop)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const shop = {
    name: req.body.name,
    address: req.body.address,
    email:req.body.email,
    id: req.body.shopId
  }
  return db.editShop(shop)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/:id', (req, res) => {
  return db.deleteShop(req.params.id)
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})
module.exports = router
