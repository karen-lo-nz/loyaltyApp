import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Features from './Features'
import UserAccount from './UserAccount'
import ShopsAccount from './ShopsAccount'

const App = (props) => {
  return (
    <>
      <div className='app'>
        <div className="container">
          <Route path='/' component={Nav}/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/features' component={Features} />
          <Route exact path='/user' component={UserAccount} />
          <Route exact path='/shop' component={ShopsAccount} />
        </div>
      </div>
    </>
  )
}

export default App
