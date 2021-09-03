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
    email: req.body.email
  }
  return db.addShop(shop)
    .then(id => { // returns new shop id in an array
      return db.getOneShop(id[0]) //get the added shop
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const shop = {
    id: req.params.id,
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
  }
  return db.editShop(shop)
    .then(() => { // returns number of shop editted,always 1
      return db.getOneShop(shop.id) //get the editted shop. 
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.delete('/:id', (req, res) => {
  return db.deleteShop(req.params.id)
    .then(() => {
      return db.getShops()
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      console.log(err.message)
    })
})
module.exports = router
