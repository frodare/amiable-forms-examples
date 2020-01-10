import React from 'react'
import { AmiableForm, useField, useSubmit, useFieldValue } from 'amiable-forms'
import './index.css'

const Input = props => {
  const { value, onChange } = useField({ name: props.name })
  return <input {...props} value={value} onChange={onChange} />
}

const Welcome = () => {
  const username = useFieldValue({ name: 'username' })
  return <h1>Welcome {username || ''}</h1>
}

const Remember = () => {
  const { value, setValue } = useField({ name: 'remember' })
  return (
    <label>
      <input
        type='checkbox'
        value={value}
        onChange={ev => setValue(ev.target.checked)}
      />
      remember login
    </label>
  )
}

const SubmitButton = () => {
  const { onSubmit } = useSubmit()
  return (
    <button type='submit' onClick={onSubmit}>
      Login
    </button>
  )
}

const process = values => console.log('Submit', values)

const SimpleLoginForm = () => (
  <div className='login'>
    <AmiableForm process={process}>
      <Welcome />
      <Input name='username' placeholder='username' />
      <Input name='password' placeholder='password' type='password' />
      <Remember />
      <SubmitButton />
    </AmiableForm>
  </div>
)

SimpleLoginForm.title = 'Login Form'
SimpleLoginForm.description = 'A simple login form to demonstrate the basic AmiableForm usage.'

export default SimpleLoginForm
