import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'

const App = (props) => {
  return (
    <>
      <div className='app'>
        <div className="container">
          <Route path='/' component={Nav}/>
          <Route exact path='/' component={Home}/>
        </div>
      </div>
    </>
  )
}

export default App
