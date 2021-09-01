const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const db = require('./users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('suite is working', () => {
  return expect(true).toBeTruthy()
})

test('getUsers gets all users', () => {
  return db.getUsers(testDb)
    .then(users => {
      expect(users).toHaveLength(3)
      return null
    })
    .catch(err => console.log(err))
})

test('getOneUser gets a single user', () => {
  return db.getOneUser(1, testDb)
    .then(user => {
      expect(user.name).toEqual('Joe')
      return null
    })
    .catch(err => console.log(err))
})

test('addUser adds a user', () => {
  const testUser = {
    name: 'Tom',
    email: 'tom@gmail.com',
    phone: 911
  }
  return db.addUser(testUser, testDb)
    .then(newId => {
      expect(newId[0]).toEqual(4)
      return null
    })
})

test('editUser edits a user', () => {
  const testUser = {
    id: 1,
    name: 'Karen'
  }
  return db.editUser(testUser, testDb)
    .then(usersEdited => {
      expect(usersEdited).toEqual(1)
      return null
    })
    .catch(err => console.log(err))
})

test('deleteUser deletes a user', () => {
  return db.deleteUser(1, testDb)
    .then(usersDeleted => {
      expect(usersDeleted).toEqual(1)
      return null
    })
    .catch(err => console.log(err))
})
