import React, { useState } from 'react'
import { AmiableForm, useField, Debug, useSubmit } from 'amiable-forms'

const Input = ({ name }) => {
  const { value, onChange } = useField({ name })
  return <input name={name} value={value} onChange={onChange} />
}

const Form = ({ count, initialValues }) => {
  const { onSubmit } = useSubmit()
  return (
    <>
      {count % 2 === 0 ? <Input name='iv0' /> : null}
      {count % 2 === 0 ? <Input name='iv1' /> : null}
      {count % 2 === 0 ? <Input name={'iv' + count} /> : null}
      <button onClick={onSubmit}>Submit</button>
    </>
  )
}

const InitialValuesForm = () => {
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)

  const initialValues = {}

  for (let i = 0; i < 10; i++) {
    initialValues['iv' + i] = 'value ' + i
  }

  return (
    <AmiableForm process={values => console.log(values)} initialValues={initialValues}>
      <div>
        <button onClick={inc}>toggle</button>
      </div>
      <Form count={count} initialValues={initialValues} />
      <Debug />
    </AmiableForm>
  )
}

InitialValuesForm.title = 'Initial Values'
InitialValuesForm.description = 'An example form showing how to set the initial form values, including a demonstration on how values are filtered on submit.'

export default InitialValuesForm
