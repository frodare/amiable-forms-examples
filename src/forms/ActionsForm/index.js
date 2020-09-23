import React from 'react'
import { Input, Button, Col, Row, Container } from 'reactstrap'
import { AmiableForm, useField, useForm, Debug } from 'amiable-forms'
import './index.css'

const TextField = props => {
  const { value, onChange, dirty } = useField({ name: props.name, validators: props.validators })
  return (
    <div className='field'>
      <Input {...props} value={value} onChange={onChange} className='mb-2' />
      <div className='field-message'>{dirty ? 'dirty' : 'clean'}</div>
    </div>
  )
}

const NOPE = () => false

const Actions = () => {
  const { setValue, reset, setValues, clear } = useForm({ shouldUpdate: NOPE })
  return (
    <Row className='mb-4'>
      <Col xs='3'><Button className='btn-block mb-1' onClick={clear}>clear</Button></Col>
      <Col xs='3'><Button className='btn-block mb-1' onClick={reset}>reset</Button></Col>
      <Col xs='3'><Button className='btn-block mb-1' onClick={() => setValue('location', 'office 1532')}>setValue</Button></Col>
      <Col xs='3'><Button className='btn-block mb-1' onClick={() => setValues({ first: 'Mike' })}>setValues</Button></Col>
      <Col xs='3'><Button className='btn-block mb-1' onClick={() => setValues({ first: 'Mike' }, { merge: true })}>setValues (merge)</Button></Col>
      <Col xs='3'><Button className='btn-block mb-1' onClick={() => setValues(values => console.log(values) || ({ ...values, first: values.first + 'bar' }))}>setValues (functional)</Button></Col>
    </Row>
  )
}

const initialValues = {
  first: 'Joe',
  last: 'Dirt'
}

const ActionsForm = () =>
  <Container className='actions-form'>
    <AmiableForm initialValues={initialValues}>
      <Actions />
      <TextField name='first' placeholder='First Name' />
      <TextField name='last' placeholder='Last Name' />
      <TextField name='location' placeholder='Location' />
      <Debug />
    </AmiableForm>
  </Container>

ActionsForm.title = 'Form Actions Example'
ActionsForm.description = 'An example using all of the actions exported from useForm().'

export default ActionsForm
