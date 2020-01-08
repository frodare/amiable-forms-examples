import React from 'react'
import { AmiableForm, useSubmit, useArrayField, useField } from 'amiable-forms'
import { Container, Button, Input, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const emailValidator = value => (!value || /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(value)) ? undefined : 'invalid'

const SubmitButton = ({ level }) => {
  const { submit } = useSubmit()
  const submitHandler = () => submit(level)
  return <Button color='primary' className='mr-2' onClick={submitHandler}>Submit {level}</Button>
}

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <Input {...props} value={value} onChange={onChange} />
}

const Email = ({ prefix, remove }) => {
  const closeOnEsc = ev => {
    if (ev.which === 27) remove()
  }
  return (
    <Row className='mb-2'>
      <Col xs='11'><TextField name={prefix} validators={[emailValidator]} placeholder='Email Address' onKeyDown={closeOnEsc} /></Col>
      <Col xs='1'><Button color='danger' block onClick={remove}>X</Button></Col>
    </Row>
  )
}

const Emails = () => {
  const { add, elements } = useArrayField({
    name: 'emails',
    Component: Email
  })

  return (
    <div className='mb-2'>
      {elements}
      <Button color='secondary' onClick={add}>add emails</Button>
    </div>
  )
}

const process = (values, state, level) => {
  console.log(values)
}

const ArrayFieldForm = () => (
  <Container className='custom'>
    <h1>amiable-forms</h1>
    <h2>useArrayField</h2>
    <p>
      An example form showing how to use the useArrayField hook.
    </p>
    <AmiableForm process={process}>
      <Emails />
      <SubmitButton />
    </AmiableForm>
  </Container>
)

export default ArrayFieldForm
