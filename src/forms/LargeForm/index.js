import React from 'react'
import { AmiableForm, useField } from 'amiable-forms'

const Input = props => {
  const { value, onChange, valid, error } = useField({ name: props.name, validators: props.validators })
  return (
    <div>
      <input {...props} value={value} onChange={onChange} placeholder={props.name} />
      {!valid ? <span>{error}</span> : null}
    </div>
  )
}

const required = value => !value && value !== false && value !== 0 ? 'required' : null

const number = value => value.match(/^[0-9]*$/) ? null : 'must be numeric'

const email = value => value && value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? null : 'must be email'

const iv = new Array(500).fill('joe@example.com').reduce((iv, v, i) => ({ ...iv, ['fieldName' + i]: v }), {})

const LargeForm = () =>
  <AmiableForm initialValues={iv}>
    {new Array(500).fill(null).map((_, i) => <Input key={i} name={'fieldName' + i} validators={[email, required, number]} />)}
  </AmiableForm>

LargeForm.title = 'Large Form'
LargeForm.description = ''

export default LargeForm
