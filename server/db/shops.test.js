const knex = require('knex')
const testConfig = require('./knexfile').test
const testDb = knex(testConfig)

const db = require('./shops')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

test('suite is working', () => {
  return expect(true).toBeTruthy()
})

test('getShops return all shops', () => {
  return db.getShops(testDb)
    .then(shops => {
      expect(shops).toHaveLength(3)
      return null
    })
    .catch(err => console.log(err))
})

test('getOneShop will return one shop', () => {
  return db.getOneShop(1, testDb)
    .then(shop => {
      expect(shop.name).toEqual('KFC')
      return null
    })
    .catch(err => console.log(err))
})

test('addShop will add a shop and return the new shops Id', () => {
  const testShop = {
    name: 'Sals',
    address: 'Newtown',
    email: 'sals@gmail.com'
  }
  return db.addShop(testShop, testDb)
    .then(newShopId => {
      expect(newShopId[0]).toEqual(4)
      return null
    })
    .catch(err => console.log(err))
})

test('editShop will edit an existing shop and return the number of shops edited', () => {
  const testShop = {
    id: 1,
    name: 'Burger King'
  }
  return db.editShop(testShop, testDb)
    .then(editedShops => {
      expect(editedShops).toEqual(1)
      return null
    })
    .catch(err => console.log(err))
})

test('deleteShop deletes a shop and returns number of shops deleted', () => {
  return db.deleteShop(1, testDb)
    .then(shopsDeleted => {
      expect(shopsDeleted).toEqual(1)
      return null
    })
    .catch(err => console.log(err))
})
