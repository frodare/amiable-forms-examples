import React, { useCallback, useRef, useEffect } from 'react'
import { AmiableForm, useField, useSubmit, Debug } from 'amiable-forms'
import { useDropzone } from 'react-dropzone'
import './index.css'

const Input = props => {
  const { value, onChange } = useField({ name: props.name })
  return <input {...props} value={value} onChange={onChange} />
}

const PREVENT_DEFAULT = ev => ev.preventDefault()

const FileInput = ({ name }) => {
  const droppedValueRef = useRef()
  const { setValue, value } = useField({ name })

  useEffect(() => {
    if (droppedValueRef.current && droppedValueRef.current !== value) {
      setValue(droppedValueRef.current)
    }
  })

  const onDrop = useCallback(acceptedFiles => {
    droppedValueRef.current = acceptedFiles
  }, [droppedValueRef])

  const onKeyDown = useCallback(ev => {
    ev.preventDefault()
    if (ev.which === 8) {
      droppedValueRef.current = null
      setValue()
    }
  }, [droppedValueRef, setValue])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const selectedFilenames = (value || []).reduce((s, file) => s + ', ' + file.name, '').replace(/^,\s/, '')
  const message = isDragActive ? 'Drop the files here ...' : selectedFilenames

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <input value={message} onKeyDown={onKeyDown} onChange={PREVENT_DEFAULT} spellCheck='false' placeholder='Drag and drop some files here, or click to select files' />
    </div>
  )
}

const SubmitButton = () => {
  const { onSubmit } = useSubmit()
  return (
    <button type='submit' onClick={onSubmit}>
      Upload
    </button>
  )
}

const process = values => console.log('Submit', values)

const DropzoneForm = () => (
  <div className='login'>
    <AmiableForm process={process}>
      <Input name='type' placeholder='File Type' />
      <Input name='memo' placeholder='File Memo' />
      <FileInput name='files' />
      <SubmitButton />
      <Debug />
    </AmiableForm>
  </div>
)

DropzoneForm.title = 'Dropzone Example Form'
DropzoneForm.description = 'A simple file upload form showing integration with dropzone.'

export default DropzoneForm
