const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const db = require('./stamps')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('suite is working', () => {
  return expect(true).toBeTruthy()
})

test('getStamps returns all stamps', () => {
  return db.getStamps(testDb)
    .then(stamps => {
      expect(stamps).toHaveLength(9)
      return null
    })
})

test('getOneStanp returns one stamp', () => {
  return db.getOneStamp(1, testDb)
    .then(stamp => {
      expect(stamp.user_id).toEqual(1)
      return null
    })
})

test('getStampsByUserId gets all stamps that match user_id and return matching entries in  from user and shops table', () => {
  return db.getStampsByUserId(1, testDb)
    .then(stamps => {
      expect(stamps[0]).toEqual({
        id: 1,
        created_at: 1092021,
        user_id: 1,
        shop_id: 1,
        user_name: 'Joe',
        shop_name: 'KFC',
        user_email: 'joe@gmail.com',
        user_phone: 123,
        shop_address: 'Brooklyn',
        shop_email: 'kfc@gmail.com'
      })
      return null
    })
})

test('getStampsByShopId gets all stamps that match shop_id and return mataching entries in from users and shops table', () => {
  return db.getStampsByShopId(1, testDb)
    .then(stamps => {
      expect(stamps[0]).toEqual({
        id: 1,
        created_at: 1092021,
        user_id: 1,
        shop_id: 1,
        user_name: 'Joe',
        shop_name: 'KFC',
        user_email: 'joe@gmail.com',
        user_phone: 123,
        shop_address: 'Brooklyn',
        shop_email: 'kfc@gmail.com'
      })
      return null
    })
})

test('addStamp adds a stamp and returns the new stamp Id', () => {
  const testStamp = {
    user_id: 1,
    shop_id: 1,
    created_at: '08102021'
  }
  return db.addStamp(testStamp, testDb)
    .then(newId => {
      expect(newId[0]).toEqual(10)
      return null
    })
})

test('editStamp edits a stamp and returns number of stamps edited', () => {
  const testStamp = {
    id: 1,
    user_id: 2
  }
  return db.editStamp(testStamp, testDb)
    .then(stampsEdited => {
      expect(stampsEdited).toEqual(1)
      return null
    })
})

test('deleteStamp deletes a stamp and returns number of stamps deleted', () => {
  return db.deleteStamp(1, testDb)
    .then(stampsDeleted => {
      expect(stampsDeleted).toEqual(1)
      return null
    })
})
