import request from 'superagent'

const rootUrl = '/api/v1/shops'

export const fetchShops = () => {
  return request.get(rootUrl)
    .then(response => {
      console.log(`shops is${response}`)
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

//  get one shop
export const fetchShopById = (id) => {
  return request.get(`${rootUrl}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

// add
export const addShop = (shop) => {
  return request.post(rootUrl)
    .send(shop)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}
// update
export const updateShop = (shop) => {
  return request.patch(`${rootUrl}/edit`)
    .send(shop)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

// delete
export const deleteShop = (id) => {
  return request.delete(`${rootUrl}/${id}`)
    .then(response => {
      return response.body
    })
    .catch(err => {
      console.log(err.message)
    })
}
