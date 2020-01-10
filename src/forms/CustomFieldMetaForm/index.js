import React, { useState } from 'react'
import { AmiableForm, useField, useFieldCustomMeta, useSubmit } from 'amiable-forms'

const Input = ({ name, id }) => {
  const { value, onChange } = useField({ name, custom: { id } })
  return <input name={name} value={value} onChange={onChange} placeholder={id} />
}

const DisplayCustomMeta = ({ name }) => {
  const customMeta = useFieldCustomMeta({ name })
  return <div>Custom META for <b>{name}</b>: <pre>{JSON.stringify(customMeta)}</pre></div>
}

const SubmitButton = () => {
  const { onSubmit } = useSubmit()
  return (
    <button type='submit' onClick={onSubmit}>
      Login
    </button>
  )
}

const CustomFieldMetaForm = () => {
  const [output, setOutput] = useState('')

  const process = (values, state) => {
    const getIdFromCustomMeta = name => state.fields[name].custom.id
    const strings = Object.entries(values).map(([name, value]) => `Field ${name} = ${value} with ID of ${getIdFromCustomMeta(name)}`)
    setOutput(strings.join('\n'))
  }

  return (
    <div className='custom-field-meta'>
      <AmiableForm process={process}>
        <Input name='field0' id='10000' />
        <Input name='field1' id='10001' />

        <DisplayCustomMeta name='field0' />
        <DisplayCustomMeta name='field1' />

        <pre>{output}</pre>

        <SubmitButton />
      </AmiableForm>
    </div>
  )
}

CustomFieldMetaForm.title = 'Custom Field Meta Data'
CustomFieldMetaForm.description = 'An example form showing how to use custom file meta data.'

export default CustomFieldMetaForm
