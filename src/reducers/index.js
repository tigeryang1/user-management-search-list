import { combineReducers } from 'redux'
import users from './users'
import groups from './groups'
import works from './works'
const rootReducer = combineReducers({
  users,
  groups,
  works
})

export default rootReducer
