import React from 'react'
import { AmiableForm, useField, useFieldValue } from 'amiable-forms'
import { Input } from 'reactstrap'

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <Input {...props} value={value} onChange={onChange} placeholder={props.name} />
}

const Content = () => {
  const total = useFieldValue({ name: 'total' })
  return (
    <>
      <TextField type='number' name='item1' />
      <TextField type='number' name='item2' />
      <TextField type='number' name='item3' />
      <div>Total: <strong>{total}</strong></div>
    </>
  )
}

const transform = ({ next }) => {
  const sum = Object.entries(next.values).reduce((sum, [field, value]) => field.startsWith('item') ? sum + +value : sum, 0)
  return {
    ...next,
    values: {
      ...next.values,
      total: sum
    }
  }
}

const TransformForm = () =>
  <AmiableForm transform={transform}>
    <Content />
  </AmiableForm>

TransformForm.title = 'Transform Function Example'
TransformForm.description = 'An example form showing how to use the tranform function.'

export default TransformForm
