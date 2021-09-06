import { getUsers, addUser, updateUser, deleteUser } from '../apis/users'

export const SET_USERS = 'SET_USERS'
export const CREATE_USER = 'CREATE_USER'
export const EDIT_USER = 'EDIT_USER'
export const REMOVE_USER = 'REMOVE_USER'

// action creators

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const createUser = (user) => {
  return {
    type: CREATE_USER,
    user
  }
}

export const editUser = (user) => {
  return {
    type: EDIT_USER,
    user
  }
}

export const removeUser = (id) => {
  return {
    type: REMOVE_USER,
    id
  }
}

// thunks

export const fetchUsers = () => {
  return dispatch => {
    return getUsers()
      .then(users => {
        dispatch(setUsers(users))
        return null
      })
  }
}

export const createOneUser = (user) => {
  return dispatch => {
    return addUser(user)
      .then(() => {
        dispatch(createUser(user))
        return null
      })
  }
}

export const editOneUser = (user) => {
  return dispatch => {
    return updateUser(user)
      .then(() => {
        dispatch(editUser(user))
        return null
      })
  }
}

export const removeOneUser = (id) => {
  return dispatch => {
    return removeOneUser(id)
      .then(() => {
        dispatch(deleteUser(id))
        return null
      })
  }
}
