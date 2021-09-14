import { SET_STAMPS, ADD_STAMP, UPDATE_STAMP, DELETE_STAMP } from '../actions/stamps'

const intialState = []

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_STAMPS:
      return action.stamps
    case ADD_STAMP:
      return [...state, action.stamp]
    case DELETE_STAMP:
      return state.filter(stamp => stamp.id !== action.id)
    case UPDATE_STAMP:
      return state.map(stamp => {
        if (stamp.id === action.id) {
          return action.stamp
        }
        return stamp
      })
    default:
      return state
  }
}

export default reducer
