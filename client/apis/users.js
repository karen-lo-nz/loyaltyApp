import request from 'superagent'

const rootUrl = '/api/v1/users'

const getUsers = () => {
  return request.get(`${rootUrl}/`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

const addUser = (user) => {
  return request.post(`${rootUrl}/`)
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

const updateUser = (user) => {
  return request.patch(`${rootUrl}/update`)
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

const deleteUser = (id) => {
  return request.del(`${rootUrl}/delete`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser
}
