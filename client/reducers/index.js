import { combineReducers } from 'redux'

import users from './users'
import shops from './shops'
import stamps from './stamps'

export default combineReducers({
  users,
  shops,
  stamps
})
