import React from 'react'
import { Switch, Route, HashRouter, Link } from 'react-router-dom'
import { Container, Col, Row } from 'reactstrap'
import './App.scss'

import SimpleLoginForm from './forms/SimpleLoginForm'
import CustomInputForm from './forms/CustomInputForm'
import CustomFieldMetaForm from './forms/CustomFieldMetaForm'
import SubmitArguments from './forms/SubmitArguments'
import ArrayFieldForm from './forms/ArrayFieldForm'
import RemoteSubmit from './forms/RemoteSubmit'
import InitialValuesForm from './forms/InitialValuesForm'
import MatchFieldForm from './forms/MatchFieldForm'
import LargeForm from './forms/LargeForm'
import ValueUpdater from './forms/ValueUpdaterForm'
import DropzoneForm from './forms/DropzoneForm'

const pages = [
  SimpleLoginForm,
  CustomInputForm,
  CustomFieldMetaForm,
  SubmitArguments,
  ArrayFieldForm,
  RemoteSubmit,
  InitialValuesForm,
  MatchFieldForm,
  LargeForm,
  ValueUpdater,
  DropzoneForm
]

const Wrapper = ({ Form }) =>
  <Container fluid className='page-wrapper'>
    <Row>
      <Col xs='3'>
        <Toc />
      </Col>
      <Col>
        <h1>amiable-forms Examples</h1>
        <h2>{Form.title || Form.name}</h2>
        <p>{Form.description || 'missing'}</p>
        <Form />
      </Col>
    </Row>
  </Container>

const Toc = () =>
  <ul>
    {pages.map(p => <li key={p.name}><Link to={'/' + p.name}>{p.title || p.name}</Link></li>)}
  </ul>

const App = () =>
  <HashRouter>
    <Switch>
      {pages.map(p => <Route key={p.name} path={'/' + p.name} render={() => <Wrapper Form={p} />} />)}
      <Route path='/' component={Toc} />
    </Switch>
  </HashRouter>

export default App
