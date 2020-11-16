import React from 'react'
import { AmiableForm, useField, Debug, useFormIsValid, useFieldIsValid, useFieldValue, useValues } from 'amiable-forms'
import { Input } from 'reactstrap'
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

const HooksDemo = () => {
  const useFormIsValidResult = useFormIsValid()
  const useFieldIsValidResult = useFieldIsValid({ name: 'testField1' })
  const useFieldValueResult = useFieldValue({ name: 'testField1' })
  const useValuesResult = useValues()

  return (
    <>
      <h5>useFormIsValid()</h5>
      <pre>{JSON.stringify(useFormIsValidResult, null, 2)}</pre>

      <h5>{'useFieldIsValid({ name: \'testField1\' })'}</h5>
      <pre>{JSON.stringify(useFieldIsValidResult, null, 2)}</pre>

      <h5>{'useFieldValue({ name: \'testField1\' })'}</h5>
      <pre>{useFieldValueResult}</pre>

      <h5>useValues()</h5>
      <pre>{JSON.stringify(useValuesResult, null, 2)}</pre>
    </>
  )
}


const UtilityHooksDemo = () => (
  <div className='validation-form'>
    <AmiableForm>
      <Field name='testField1' placeholder='testField1' validators={[]} />
      <HooksDemo />

      <div className='debug-wrapper'><Debug /></div>
    </AmiableForm>
  </div>
)

UtilityHooksDemo.title = 'Utility Hooks Example Form'
UtilityHooksDemo.description = 'A form build to demonstrate the various built-in hooks.'

export default UtilityHooksDemo
