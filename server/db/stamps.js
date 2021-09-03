const connection = require('./connection')

// get all users stamps but at the front need to filter out the shop and use length to count #of stamps?

// sounds like a good idea. I have added another function that gets by shop id and refactored slightly, just incase we need it :). Also added other crud functions just incase we need them. I write databse functions the old way, just a habit because db's use older tech - TH

function getStamps (db = connection) {
  return db('stamps')
    .select()
}

function getOneStamp (id, db = connection) {
  return db('stamps')
    .select()
    .where('id', id)
    .first()
}

function getStampsByUserId (userId, db = connection) {
  return db('stamps')
    .where('user_id', userId)
    .join('users', 'stamps.user_id', 'users.id')
    .join('shops', 'stamps.shop_id', 'shops.id')
    .select('stamps.id', 'stamps.created_at', 'stamps.user_id', 'stamps.shop_id', 'users.name as user_name', 'shops.name as shop_name', 'users.email as user_email', 'users.phone as user_phone', 'shops.address as shop_address', 'shops.email as shop_email')
}

function getStampsByShopId (shopId, db = connection) {
  return db('stamps')
    .where('shop_id', shopId)
    .join('users', 'stamps.user_id', 'users.id')
    .join('shops', 'stamps.shop_id', 'shops.id')
    .select('stamps.id', 'stamps.created_at', 'stamps.user_id', 'stamps.shop_id', 'users.name as user_name', 'shops.name as shop_name', 'users.email as user_email', 'users.phone as user_phone', 'shops.address as shop_address', 'shops.email as shop_email')
}

function addStamp (stamp, db = connection) {
  return db('stamps')
    .insert(stamp)
}

function editStamp (stamp, db = connection) {
  return db('stamps')
    .where('id', stamp.id)
    .update(stamp)
}

function deleteStamp (id, db = connection) {
  return db('stamps')
    .where('id', id)
    .del()
}

module.exports = {
  getStamps,
  getOneStamp,
  getStampsByUserId,
  getStampsByShopId,
  addStamp,
  editStamp,
  deleteStamp
}
