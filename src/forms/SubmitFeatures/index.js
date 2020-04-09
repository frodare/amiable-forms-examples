import React from 'react'
import { AmiableForm, useSubmit, useForm, useField } from 'amiable-forms'
import { Container, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const SubmitButton = () => {
  const { onSubmit, submitting, submitCount } = useSubmit()

  if (submitting) return <Button disabled>submitting ...</Button>
  return <Button className='mr-2' onClick={onSubmit}>Submit {submitCount}</Button>
}

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <input {...props} value={value} onChange={onChange} placeholder={props.name} />
}

const CurrentMeta = () => {
  const { meta } = useForm()
  return <pre>{JSON.stringify(meta, null, 2)}</pre>
}

const delay = ms => new Promise(resolve => window.setTimeout(resolve, ms))

const asyncProcess = async () => {
  console.log('start async processing')
  await delay(1000)
  console.log('done async processing')
}

const process = (values, state) => {
  console.log('sync processing', values, state)
  state.setValue('firstName', 'Test From Submit')
  state.setValue('counter', state.meta.submitCount)
}

const Fields = () =>
  <>
    <TextField name='firstName' />
    <TextField name='lastName' />
    <TextField name='counter' />
  </>

const SubmitFeatures = () => {
  return (
    <Container>
      <h3>Sync Process</h3>
      <AmiableForm process={process}>
        <Fields />
        <CurrentMeta />
        <SubmitButton />
      </AmiableForm>
      <hr />
      <h3>Async Process</h3>
      <AmiableForm process={asyncProcess}>
        <Fields />
        <CurrentMeta />
        <SubmitButton />
      </AmiableForm>
    </Container>
  )
}

SubmitFeatures.title = 'Submit Features'
SubmitFeatures.description = 'An example form showing some extra features supported by submit.'

export default SubmitFeatures
