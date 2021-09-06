import { SET_USERS, CREATE_USER, EDIT_USER, REMOVE_USER } from '../actions/users'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users

    case CREATE_USER:
      return [...state, action.user]

    case EDIT_USER:
      return state.map(user => {
        if (user.id === action.user.id) return action.user
        else return user
      })

    case REMOVE_USER:
      return state.filter(user => user.id !== action.id)

    default:
      return state
  }
}

export default reducer
