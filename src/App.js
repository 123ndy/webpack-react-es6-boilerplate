import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import Container from './Container'
import Home from './Home'
import About from './About'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Container}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
    </Route>
  </Router>),
  document.getElementById('react-container')
)
