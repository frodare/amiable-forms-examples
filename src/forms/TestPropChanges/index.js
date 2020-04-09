import React, { useState, useCallback, useRef } from 'react'
import { AmiableForm, useSubmit, useForm, useField, Debug } from 'amiable-forms'
import { Input, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const SubmitButton = () => {
  const { onSubmit } = useSubmit()
  return <Button className='mt-2 mr-2' onClick={onSubmit}>Submit</Button>
}

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <Input {...props} value={value} onChange={onChange} placeholder={props.name} />
}

const Fields = () =>
  <>
    <TextField name='firstName' />
    <TextField name='lastName' />
    <TextField name='counter' />
    <TextField name='location' />
  </>

const initialValues = {
  firstName: 'Joe',
  lastName: 'Dirt',
  counter: 0
}

const useDetectChange = ({ name, value }) => {
  const ref = useRef()
  if (ref.current === undefined) {
    ref.current = value;
  } else if (ref.current !== value) {
    console.log('DETECTED CHANGE [', name, ']')
  }
  ref.current = value
}

const DetectChanges = () => {
  const { setValues, setValue, clear, reset } = useForm()
  const { onSubmit, submit } = useSubmit()
  useDetectChange({ name: 'setValues', value: setValues })
  useDetectChange({ name: 'setValue', value: setValue })
  useDetectChange({ name: 'clear', value: clear })
  useDetectChange({ name: 'reset', value: reset })
  useDetectChange({ name: 'onSubmit', value: onSubmit })
  useDetectChange({ name: 'submit', value: submit })
  return null
}


const TestPropChanges = () => {
  const [version, setVersion] = useState(0)
  const [values, setValues] = useState(initialValues)

  const incVersion = useCallback(() => {
    const next = version + 1
    console.log('process version is now: ', next)
    setVersion(next)
  }, [version, setVersion])

  const incValues = useCallback(() => {
    const next = { ...values }
    next.counter++
    console.log('initial values version is now: ', next)
    setValues(next)
  }, [values, setValues])

  //const initialValues = useMemo()

  const process = useCallback((values, state) => {
    console.log('Running proces with version: ', version)
  }, [version])

  return (
    <AmiableForm process={process} initialValues={values}>
      <Fields />
      <SubmitButton />
      <Button className='mt-2 mr-2' onClick={incVersion}>Update Process Function</Button>
      <Button className='mt-2 mr-2' onClick={incValues}>Update Initial Values</Button>
      <Debug />
      <DetectChanges />
    </AmiableForm>

  )
}

TestPropChanges.title = 'Test Prop Changes'
TestPropChanges.description = 'A form to test how amiable-forms handles when props are changed.'

export default TestPropChanges
