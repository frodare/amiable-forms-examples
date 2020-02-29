import React, { useState } from 'react'
import { AmiableForm, useField, ValueUpdator } from 'amiable-forms'
import { Button, Input } from 'reactstrap'

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <Input {...props} value={value} onChange={onChange} />
}

const ValueUpdatorForm = () => {
  const [counter, setCounter] = useState(0)
  return (
    <AmiableForm process={process}>
      <ValueUpdator values={{ counter }} />
      <TextField name='firstName' />
      <TextField name='lastName' />
      <TextField name='counter' />
      <Button onClick={() => setCounter(counter + 1)}>increment</Button>
    </AmiableForm>
  )
}

ValueUpdatorForm.title = 'ValueUpdator Example'
ValueUpdatorForm.description = 'An example form showing how to use the ValueUpdator component.'

export default ValueUpdatorForm
