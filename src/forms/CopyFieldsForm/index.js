import React from 'react'
import { AmiableForm, useField, Debug } from 'amiable-forms'
import { Input } from 'reactstrap'
import useFieldCopier from './useFieldCopier'

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <Input {...props} value={value} onChange={onChange} placeholder={props.name} />
}

const FormBody = () => {
  const copyFromHome = useFieldCopier({ copyFromPrefix: 'home', copyToPrefix: 'billing' })
  const copyFromBilling = useFieldCopier({ copyFromPrefix: 'billing', copyToPrefix: 'home' })
  return (
    <>
      <TextField name='homeAddress' />
      <TextField name='homeCity' />
      <TextField name='homeState' />
      <TextField name='homeZip' />

      <div className='m-4' />

      <TextField name='billingAddress' />
      <TextField name='billingCity' />
      <TextField name='billingState' />
      <TextField name='billingZip' />

      <div className='m-4' />

      <button onClick={copyFromHome}>Copy Home to Billing</button>
      <button onClick={copyFromBilling}>Copy Billing to Home</button>

      <div className='m-4' />

      <Debug />
    </>
  )
}

const CopyFieldsForm = () =>
  <AmiableForm>
    <FormBody />
  </AmiableForm>

CopyFieldsForm.title = 'Copy Fields Example'
CopyFieldsForm.description = 'An example form showing how to use useForm to copy a set of fields.'

export default CopyFieldsForm
