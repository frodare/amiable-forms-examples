import React, { useState } from 'react'
import { AmiableForm, useField, Debug, useSubmit } from 'amiable-forms'
import { Button, Col, Input, Row } from 'reactstrap'
import './index.css'

const Field = ({ name, validators, placeholder }) => {
  const { value, onChange, onBlur, onFocus, error, valid } = useField({ name, validators })
  return (
    <div className='field'>
      <Input invalid={!valid} name={name} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} onFocus={onFocus} />
      <div className='field-message'>{error}</div>
    </div>
  )
}

const SubmitButton = ({ sharedRef }) => {
  const { onSubmit } = useSubmit()
  return <Button onClick={onSubmit}>Normal Submit</Button>
}

const ModalGlassOverlay = ({ children, className, onClick }) =>
  <div className={'modal-glass' + (className ? ' ' + className : '')} onClick={onClick}>{children}</div>


const Modal = ({ onCancel, onConfirm }) =>
  <ModalGlassOverlay>
    <div className='confirm-modal-content text-left p-5'>
      <p>Are you sure?</p>
      <Row className='mt-4'>
        <Col><Button onClick={onCancel} color='light'>Cancel</Button></Col>
        <Col><Button onClick={onConfirm} color='primary'>Confirm</Button></Col>
      </Row>
    </div>
  </ModalGlassOverlay>



const AsyncProcess = () => {
  const [showing, setShowing] = useState(false)

  const onConfirm = () => {
    setShowing(false)
  }

  const onCancel = () => {
    setShowing(false)
  }

  const process = values => {
    console.log('values', values)
    setShowing(true)
  }

  return (
    <div className='validation-form'>
      <h2>!! WORK IN PROGRESS !!</h2>
      <AmiableForm process={process}>
        <Field name='firstName' placeholder='First Name' />
        <Field name='lastName' placeholder='Last Name' />
        <SubmitButton />

        <div className='debug-wrapper'><Debug /></div>
        {showing ? <Modal onCancel={onCancel} onConfirm={onConfirm} /> : null}
      </AmiableForm>
    </div>
  )
}

AsyncProcess.title = 'Asynchronous Support Example'
AsyncProcess.description = 'A form showing how asynchronous functions can be used for the process function.'

export default AsyncProcess
