import React, { useRef } from 'react'
import { AmiableForm, useSubmit, useField } from 'amiable-forms'
import { Container, Button, Input } from 'reactstrap'
import './index.scss'

const TextField = props => {
  const { value, onChange } = useField({ name: props.name })
  return <Input {...props} value={value} onChange={onChange} />
}

const process = values => window.alert('Submited: ' + JSON.stringify(values))

const ShareSubmit = ({ sharedRef }) => {
  const { submit } = useSubmit()
  sharedRef.current = submit
  return null
}

const NormalSubmit = ({ sharedRef }) => {
  const { onSubmit } = useSubmit()
  return <Button onClick={onSubmit}>Normal Submit</Button>
}

const RemoteSubmit = () => {
  const ref = useRef()

  return (
    <Container className='custom'>

      <AmiableForm process={process}>
        <div class='form-content'>
          <h5>Inside Form</h5>
          <TextField name='test' />
          <ShareSubmit sharedRef={ref} />
          <NormalSubmit />
        </div>
      </AmiableForm>

      <div class='form-content'>
        <h5>Outside Form</h5>
        <Button onClick={() => ref.current()}>Remote Submit Button</Button>
      </div>
    </Container>
  )
}

RemoteSubmit.title = 'Remote Submit'
RemoteSubmit.description = 'An example form showing how to submit a form from outside of the AmiableForm context using a shared ref.'

export default RemoteSubmit
