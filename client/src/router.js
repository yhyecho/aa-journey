import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import NewCat from './components/NewCat'
import NewCourse from './components/NewCourse'
import Signin from './components/SignIn'
import Signup from './components/SignUp'
import Profile from './components/Profile'
import Order from './components/Order'

function requireAuth(nextState, replace) {
  if(!localStorage.getItem('userId')) {
    replace({
      pathname: '/signin'
    })
  }
}

export default function() {
  return (
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='new-category' onEnter={requireAuth} component={NewCat} />
        <Route path='new-course' onEnter={requireAuth} component={NewCourse} />
        <Route path='signin' component={Signin} />
        <Route path='signup' component={Signup} />
        <Route path='profile' onEnter={requireAuth} component={Profile} />
        <Route path='order' onEnter={requireAuth} component={Order} />
      </Route>
    </Router>
  )
}