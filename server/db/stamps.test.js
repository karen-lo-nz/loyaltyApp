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
    .catch(err => console.log(err))
})

// Not what I expected, I thought it should return the entries from the other tables as well? - Karen could you have a look? TH

// should this function only have one join to the users table and the other function that gets by shop id have a join to the shops table?

test('getStampsByUserId gets all stamps that match user_id and return matching entries in  from user and shops table', () => {
  return db.getStampsByUserId(1, testDb)
    .then(result => {
      console.log(result)
      expect(result).toHaveLength(3)
      return null
    })
    .catch(err => console.log(err))
})

test('getStampsByShopId gets all stamps that match shop_id and return mataching entries in from users and shops table', () => {
  return db.getStampsByShopId(1, testDb)
    .then(result => {
      console.log(result)
      expect(result).toHaveLength(4)
      return null
    })
    .catch(err => console.log(err))
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
    .catch(err => console.log(err))
})

test('deleteStamp deletes a stamp and returns number of stamps deleted', () => {
  return db.deleteStamp(1, testDb)
    .then(stampsDeleted => {
      expect(stampsDeleted).toEqual(1)
      return null
    })
    .catch(err => console.log(err))
})
