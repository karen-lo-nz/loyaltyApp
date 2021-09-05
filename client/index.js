import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import { HashRouter as Router } from 'react-router-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('app')
  )
})
