import React from 'react'
import { AmiableForm, useField, Debug } from 'amiable-forms'
import { Input } from 'reactstrap'

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <Input {...props} value={value} onChange={onChange} placeholder={props.name} />
}

const ComplexDataForm = () => {
  return (
    <AmiableForm>
      <TextField name='id' />
      <TextField name='user.info.firstName' />
      <TextField name='user.info.lastName' />
      <TextField name='user.alias.0' />
      <TextField name='user.alias.1' />
      <TextField name='user.alias.2' />
      <Debug />
    </AmiableForm>
  )
}

ComplexDataForm.title = 'Complex Data Example'
ComplexDataForm.description = 'An example form showing how to build complex objects.'

export default ComplexDataForm
