import { fetchStamps, addStamp, deleteStamp, updateStamp, fetchStampById } from '../apis/stamps'

export const SET_STAMPS = 'SET_STAMPS'
export const SET_STAMP = 'SET_STAMP'
export const ADD_STAMP = 'ADD_STAMP'
export const UPDATE_STAMP = 'UPDATE_STAMP'
export const DELETE_STAMP = 'DELETE_STAMP'

// get all stamps
const setStamps = (stamps) => {
  return {
    type: SET_STAMPS,
    stamps
  }
}

// thunk
export const getStamps = () => {
  return dispatch => {
    return fetchStamps()
      .then(stamps => {
        return dispatch(setStamps(stamps))
      })
  }
}

// get one stamp
const setOneStamp = (stamp) => {
  return {
    type: SET_STAMP,
    stamp
  }
}

// thunk

export const getOneStamp = (id) => {
  return dispatch => {
    return fetchStampById(id)
      .then(stamp => {
        return dispatch(setOneStamp(stamp))
      })
  }
}

// add stamp
const addStampToStore = (stamp) => {
  return {
    type: ADD_STAMP,
    stamp
  }
}

// thunk
export const createStamp = (stamp) => {
  return dispatch => {
    return addStamp(stamp)
      .then(stamp => {
        return dispatch(addStampToStore(stamp))
      })
  }
}

// update stamp
const updateStampInStore = (id, stamp) => {
  return {
    type: UPDATE_STAMP,
    id,
    stamp
  }
}

// thunk
export const updateStampAction = (stamp) => {
  return dispatch => {
    return updateStamp(stamp.id, stamp)
      .then(updatedStamp => {
        return dispatch(updateStampInStore(updatedStamp.id, updatedStamp))
      })
  }
}

// delete stamp
const deleteStampFromStore = (id) => {
  return {
    type: DELETE_STAMP,
    id
  }
}

// thunk
export const deleteStampAction = (id) => {
  return dispatch => {
    return deleteStamp(id)
      .then(() => {
        return dispatch(deleteStampFromStore(id))
      })
  }
}
