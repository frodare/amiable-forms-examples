import React from 'react'
import { AmiableForm, useField } from 'amiable-forms'

const matches = (a, b) => (!a && !b) || (a === b)

const matchValidator = (value, values) => matches(value, values.name) ? null : 'fields must match'

const Input = ({ name, validators, relatedFields }) => {
  const { value, onChange, valid, error } = useField({ name, validators, relatedFields })
  return (
    <div>
      {!valid ? <div>{error}</div> : null}
      <input name={name} value={value} onChange={onChange} />
    </div>
  )
}

const MatchFieldForm = () => (
  <AmiableForm>
    <Input name='name' placeholder='Name' />
    <Input name='name2' relatedFields={['name']} validators={[matchValidator]} />
  </AmiableForm>
)

MatchFieldForm.title = 'Match Field Validation'
MatchFieldForm.description = 'Example showing how to create a validator that requires two fields to match each other'

export default MatchFieldForm
