import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUsers } from '../actions/users'

import Home from './Home'
import Nav from './Nav'
import Features from './Features'
import UserAccount from './UserAccount'

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <div className='app'>
        <div className="container">
          <Route path='/' component={Nav}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/features' component={Features} />
          <Route exact path='/user' component={UserAccount} />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    users: globalState.users
  }
}

export default connect(mapStateToProps)(App)
