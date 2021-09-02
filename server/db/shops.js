const connection = require('./connection')

function getShops (db = connection) {
  return db('shops')
    .select()
}

function getOneShop (id, db = connection) {
  return db('shops')
    .select()
    .first()
    .where('id', id)
}

function addShop (shop, db = connection) {
  return db('shops')
    .insert(shop)
}

function editShop (shop, db = connection) {
  return db('shops')
    .where('id', shop.id)
    .update(shop)
}

function deleteShop (id, db = connection) {
  return db('shops')
    .where('id', id)
    .del()
}

module.exports = {
  getShops,
  getOneShop,
  addShop,
  editShop,
  deleteShop
}
