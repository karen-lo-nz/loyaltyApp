const connection = require('./connection')

// get all users stamps but at the front need to filter out the shop and use length to count #of stamps?

// sounds like a good idea. I have added another function that gets by shop id and refactored slightly, just incase we need it :). Also added other crud functions just incase we need them. I write databse functions the old way, just a habit because db's use older tech - TH

function getStamps (db = connection) {
  return db('stamps')
    .select()
}

function getStampsByUserId (userId, db = connection) {
  return db('stamps')
    .select()
    .where('user_id', userId)
    .join('users', 'stamps.user_id', 'users.id')
    .join('shops', 'stamps.shop_id', 'shops.id')
}

function getStampsByShopId (shopId, db = connection) {
  return db('stamps')
    .select()
    .where('shop_id', shopId)
    .join('users', 'stamps.user_id', 'users.id')
    .join('shops', 'stamps.shop_id', 'shops.id')
}

function addStamp (stamp, db = connection) {
  return db('stamps')
    .insert(stamp)
    .then( ()=> { // returning new stamp Id
      return  getStamps() //get all stamps table to see added one
    })
}

function editStamp (stamp, db = connection) {
  return db('stamps')
    .where('id', stamp.id)
    .update(stamp)
    .then( ()=> { // number of stamp editted
      return  getStamps() //get all stamps table to see your editted one
    })
}

function deleteStamp (id, db = connection) {
  return db('stamps')
    .where('id', id)
    .del()
}

module.exports = {
  getStamps,
  getStampsByUserId,
  getStampsByShopId,
  addStamp,
  editStamp,
  deleteStamp
}
