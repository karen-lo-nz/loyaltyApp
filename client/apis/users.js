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

const editUser = (user) => {
  return request.patch(`${rootUrl}/${user.id}`)
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(err => {
      throw err
    })
}

const deleteUser = (id) => {
  return request.del(`${rootUrl}/${id}`)
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
  editUser,
  deleteUser
}
