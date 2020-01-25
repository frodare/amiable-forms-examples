import React, { useRef } from 'react'
import { AmiableForm, useField, useFieldValue, Debug } from 'amiable-forms'
import './index.css'

// const matches = (a, b) => (!a && !b) || (a === b)

const Input = ({ name, validators, relatedFields }) => {
  const { value, onChange, valid, error } = useField({ name, validators, relatedFields })
  return (
    <div>
      {!valid ? <div>{error}</div> : null}
      <input name={name} value={value} onChange={onChange} />
    </div>
  )
}

const InputMatch = ({ name, nameOfMatch }) => {
  const matchValueRef = useRef()
  const validatorsRef = useRef([(value, values) => {
    console.log('running validation ', { value, values })
    return matches(value, matchValueRef.current) ? null : 'fields must match'
  }])

  const matchValue = useFieldValue({ name: nameOfMatch })
  const { value, onChange, error, valid, setValue } = useField({ name, validators: validatorsRef.current })

  if (matchValueRef.current !== matchValue) {
    matchValueRef.current = matchValue
    setValue(value)
  }

  return (
    <div>
      {!valid ? <div>{error}</div> : null}
      <input name={name} value={value} onChange={onChange} />
    </div>
  )
}

const process = values => console.log('Submit', values)

const matches = (a, b) => (!a && !b) || (a === b)

const matchValidator = (value, values) => matches(value, values.name) ? null : 'fields must match'

const MatchFieldForm = () => (
  <AmiableForm process={process}>
    <Input name='name' placeholder='Name' />
    <Input name='name2' relatedFields={['name']} validators={[matchValidator]} />
    <Debug />
  </AmiableForm>
)

MatchFieldForm.title = 'Match Field Validation'
MatchFieldForm.description = ''

export default MatchFieldForm
