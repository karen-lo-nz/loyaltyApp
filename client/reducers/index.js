import { combineReducers } from 'redux'

import users from './users'
import shops from './shops'

export default combineReducers({
  users,
  shops
})
