import React from 'react'
import { AmiableForm, useSubmit } from 'amiable-forms'
import { Container, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const SubmitButton = ({ level }) => {
  const { submit } = useSubmit()
  const submitHandler = () => submit(level)
  return <Button className='mr-2' onClick={submitHandler}>Submit {level}</Button>
}

const process = (values, state, level) => {
  window.alert(`Submit with ${level} access`)
}

const SubmitArguments = () => (
  <Container className='custom'>
    <h1>amiable-forms</h1>
    <h2>Submit Arguments</h2>
    <p>
      An example form showing how to use submit arguments.
    </p>
    <AmiableForm process={process}>
      <SubmitButton level='Gold' />
      <SubmitButton level='Silver' />
      <SubmitButton level='Copper' />
    </AmiableForm>
  </Container>
)
export default SubmitArguments
