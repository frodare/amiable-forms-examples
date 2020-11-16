import React from 'react'
import { AmiableForm, useField, Debug, useFormIsValid, useFieldIsValid } from 'amiable-forms'
import { Input } from 'reactstrap'
import * as v from './validators'
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

const ValidLabel = ({ label, value }) => <div>{label} is {value ? 'valid' : 'invalid'}</div>

const FormStatus = () => {
  const valid = useFormIsValid()

  const ageIsValid = useFieldIsValid({ name: 'age' })
  const zipIsValid = useFieldIsValid({ name: 'zip' })
  const ccIsValid = useFieldIsValid({ name: 'cc' })
  const emailIsValid = useFieldIsValid({ name: 'email' })

  return (
    <>
      <h2>{valid ? 'Form is VALID' : 'Form is INVALID'}</h2>
      <span>Valid fields are here to test the hooks useFormIsValid() and useFieldIsValid() hooks.</span>
      <ValidLabel label='Age' value={ageIsValid} />
      <ValidLabel label='Zip' value={zipIsValid} />
      <ValidLabel label='Credit Card' value={ccIsValid} />
      <ValidLabel label='Email Address' value={emailIsValid} />
    </>
  )
}

const ValidationForm = () => (
  <div className='validation-form'>
    <AmiableForm>
      <FormStatus />
      <Field name='age' placeholder='Age (numeric and max)' validators={[v.numeric, v.maxValue(100)]} />
      <Field name='zip' placeholder='Zip (zip)' validators={[v.zip]} />
      <Field name='cc' placeholder='Credit Card (creditcard)' validators={[v.creditcard]} />
      <Field name='email' placeholder='Email Address (email)' validators={[v.email]} />
      <div className='debug-wrapper'><Debug /></div>
    </AmiableForm>
  </div>
)

ValidationForm.title = 'Validation Example Form'
ValidationForm.description = 'A form containing various examples of field validations.'

export default ValidationForm
