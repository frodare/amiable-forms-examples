import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { AmiableForm, useRepeatedField, useField } from 'amiable-forms'

const X_CHAR = '✖'

const Input = props => {
  const { value, onChange } = useField({ name: props.name })
  return <input {...props} value={value} onChange={onChange} />
}

// Input name must start with prefix otherwise removing elements don't remove properly
// in this example if name was instead 'ITEM_' + index, it wouldn't work properly
const Item = ({ index, remove, prefix }) =>
  <Row>
    <Col>
      <Input name={prefix + '_ITEM'} label={'Item ' + index} placeholder={'Item ' + index + ' Placeholder'} />
      <Button color='light' onClick={remove}>{X_CHAR}</Button>
    </Col>
  </Row>

const RepeatedField = () => {
  const { add, elements } = useRepeatedField({ prefix: 'ITEM', Component: Item })
  return (
    <>
      <Button className='mb-3' outline color='secondary' onClick={add}>Add</Button>
      {elements}
    </>
  )
}

const process = values => console.log('Submit', values)

const RepeatedFieldForm = () => {
  return (
    <div className='repeatedField'>
      <AmiableForm process={process}>
        <RepeatedField />
      </AmiableForm>
    </div>
  )
}

export default RepeatedFieldForm
