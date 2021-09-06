const connection = require('./connection')

function getUsers (db = connection) {
  return db('users')
    .select()
}

function getOneUser (id, db = connection) {
  return db('users')
    .select()
    .first()
    .where('id', id)
}

function addUser (user, db = connection) {
  return db('users')
    .insert(user)
}

function updateUser (user, db = connection) {
  return db('users')
    .where('id', user.id)
    .update(user)
}

function deleteUser (id, db = connection) {
  return db('users')
    .where('id', id)
    .del()
}

module.exports = {
  getUsers,
  getOneUser,
  addUser,
  updateUser,
  deleteUser
}
