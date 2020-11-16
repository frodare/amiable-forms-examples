import React from 'react'
import { Switch, Route, HashRouter, Link } from 'react-router-dom'
import { Container, Col, Row } from 'reactstrap'
import version from 'amiable-forms/dist/version'
import './App.scss'

import ActionsForm from './forms/ActionsForm'
import ArrayFieldForm from './forms/ArrayFieldForm'
import AsyncProcess from './forms/AsyncProcess'
import ComplexDataForm from './forms/ComplexDataForm'
import CopyFieldsForm from './forms/CopyFieldsForm'
import CustomFieldMetaForm from './forms/CustomFieldMetaForm'
import CustomInputForm from './forms/CustomInputForm'
import DateField from './forms/DateField'
import DropzoneForm from './forms/DropzoneForm'
import InitialValuesForm from './forms/InitialValuesForm'
import LargeForm from './forms/LargeForm'
import MatchFieldForm from './forms/MatchFieldForm'
import RemoteSubmit from './forms/RemoteSubmit'
import SimpleLoginForm from './forms/SimpleLoginForm'
import SubmitArguments from './forms/SubmitArguments'
import SubmitFeatures from './forms/SubmitFeatures'
import TestPropChanges from './forms/TestPropChanges'
import TransformForm from './forms/TransformForm'
import UtilityHooksForm from './forms/UtilityHooksForm'
import ValidationExampleForm from './forms/ValidationExampleForm'
import ValueUpdater from './forms/ValueUpdaterForm'

const pages = [
  ActionsForm,
  ArrayFieldForm,
  AsyncProcess,
  ComplexDataForm,
  CopyFieldsForm,
  CustomFieldMetaForm,
  CustomInputForm,
  DateField,
  DropzoneForm,
  InitialValuesForm,
  LargeForm,
  MatchFieldForm,
  RemoteSubmit,
  SimpleLoginForm,
  SubmitArguments,
  SubmitFeatures,
  TestPropChanges,
  TransformForm,
  UtilityHooksForm,
  ValidationExampleForm,
  ValueUpdater
]

const Wrapper = ({ Form }) =>
  <Container fluid className='page-wrapper'>
    <Row>
      <Col xs='3'>
        <Toc />
      </Col>
      <Col xs='9'>
        <h1>amiable-forms Examples (v{version})</h1>
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
