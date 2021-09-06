import { data as allData } from './mockData'
import usersReducer from './users'

import { SET_USERS, CREATE_USER, EDIT_USER, REMOVE_USER } from '../actions/users'

const data = allData.users

const initialState = data

describe('users.js reducer tests', () => {
  test('set users', () => {
    const action = {
      type: SET_USERS,
      users: initialState
    }

    const actual = usersReducer([], action)// inital state should be empty if no action is set
    expect(actual).toHaveLength(initialState.length)
  })

  test('create user', () => {
    const user = {
      id: 4,
      name: 'Tom',
      phone: 911,
      email: 'tom@gmail.com'
    }

    const action = {
      type: CREATE_USER,
      user
    }

    const usersList = usersReducer(initialState, action)

    const actual = usersList.find(user => user.id === 4)
    expect(actual.name).toEqual('Tom')
    expect(usersList).toHaveLength(4)
  })

  test('update user', () => {
    const user = {
      id: 1,
      name: 'Karen',
      phone: 123,
      email: 'karen@gmail.com'
    }

    const action = {
      type: EDIT_USER,
      user
    }

    const usersList = usersReducer(initialState, action)

    const actual = usersList.find(user => user.id === 1)
    expect(actual.name).toEqual('Karen')
    expect(usersList).toHaveLength(3)
  })

  test('delete user', () => {
    const id = 1

    const action = {
      type: REMOVE_USER,
      id
    }

    const userList = usersReducer(initialState, action)
    expect(userList).toHaveLength(2)
  })
})
