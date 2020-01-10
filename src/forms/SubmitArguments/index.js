import React from 'react'
import { AmiableForm, useSubmit } from 'amiable-forms'
import { Container, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
    <AmiableForm process={process}>
      <SubmitButton level='Gold' />
      <SubmitButton level='Silver' />
      <SubmitButton level='Copper' />
    </AmiableForm>
  </Container>
)

SubmitArguments.title = 'Submit Arguments'
SubmitArguments.description = 'An example form showing how to use submit arguments.'

export default SubmitArguments
