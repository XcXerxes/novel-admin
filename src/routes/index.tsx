import React from 'react'
import Loadable from '@loadable/component'
// import OptionsWithoutRender = LoadableExport.OptionsWithRender
import {HashRouter as Router, Route, Switch } from 'react-router-dom'
import BasicLayout from '../components/Layouts/BasicLayout'
const Login = Loadable(() => import('../pages/User/Login'))

const Routes:React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/user/login" component={Login} />
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  )
}

export default Routes
