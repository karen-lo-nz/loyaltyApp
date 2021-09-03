import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Features from './Features'

const App = (props) => {
  return (
    <>
      <div className='app'>
        <div className="container">
          <Route path='/' component={Nav}/>
          <Route exact path='/' component={Home}/>
          <Route path='/features' component={Features} />
        </div>
      </div>
    </>
  )
}

export default App
