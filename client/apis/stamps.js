import request from 'superagent'

const rootUrl = '/api/v1/stamps'

export const fetchStamps = () => {
  return request.get(rootUrl)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

//  get one stamp
export const fetchStampById = (id) => {
  return request.get(`${rootUrl}/${id}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

// add
export const addStamp = (stamp) => {
  return request.post(rootUrl)
    .send(stamp)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}
// update
export const updateStamp = (stamp) => {
  return request.patch(`${rootUrl}/update`)
    .send(stamp)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

// delete
export const deleteStamp = (id) => {
  return request.delete(`${rootUrl}/:${id}`)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}
