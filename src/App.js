import React from 'react'
import { Switch, Route, HashRouter, Link } from 'react-router-dom'
import './App.css'

import SimpleLoginForm from './forms/SimpleLoginForm'
import CustomInputForm from './forms/CustomInputForm'
import CustomFieldMetaForm from './forms/CustomFieldMetaForm'
import SubmitArguments from './forms/SubmitArguments'

const Toc = () =>
  <ul>
    <li><Link to='/login'>Simple Login Form Example</Link></li>
    <li><Link to='/custom'>Custom Input Example</Link></li>
    <li><Link to='/customMeta'>Custom Field Meta Example</Link></li>
    <li><Link to='/submitArguments'>Submit Arguments Example</Link></li>
  </ul>

const App = () =>
  <HashRouter>
    <Switch>
      <Route path='/login' component={SimpleLoginForm} />
      <Route path='/custom' component={CustomInputForm} />
      <Route path='/customMeta' component={CustomFieldMetaForm} />
      <Route path='/submitArguments' component={SubmitArguments} />
      <Route path='/' component={Toc} />
    </Switch>
  </HashRouter>

export default App
