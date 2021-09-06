import request from 'superagent'

const rootUrl = '/api/v1/users'

export const getUsers = () => {
  return request.get(`${rootUrl}/`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

export const addUser = (user) => {
  return request.post(`${rootUrl}/`)
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

export const updateUser = (user) => {
  return request.patch(`${rootUrl}/update`)
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

export const deleteUser = (id) => {
  return request.del(`${rootUrl}/delete`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}
