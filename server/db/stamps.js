const connection = require('./connection')


//get all users stamps but at the front need to filter out the shop and use length to count #of stamps?
const getStampsbyId = (userId,db = connection) => {
  return db('stamps')
  .select()
  .where('user_id', userId)
  .join('users', 'stamps.user_id', 'users.id')
  .join('shops', 'stamps.shop_id', 'shops.id')
}

module.exports = {
  getStampsbyId
}
