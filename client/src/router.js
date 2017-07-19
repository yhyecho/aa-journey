import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import NewCat from './components/NewCat'

export default function() {
  return (
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/new-cat' component={NewCat} />
      </Route>
    </Router>
  )
}