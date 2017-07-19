import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import NewCat from './components/NewCat'
import Course from './components/Course'
import Signin from './components/SignIn'
import Signup from './components/SignUp'

export default function() {
  return (
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/new-cat' component={NewCat} />
        <Route path='/new-course' component={Course} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
      </Route>
    </Router>
  )
}