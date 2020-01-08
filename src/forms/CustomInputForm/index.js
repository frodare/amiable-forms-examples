import React, { memo } from 'react'
import { AmiableForm, useField } from 'amiable-forms'
import { Input, Container, ButtonGroup, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const BinaryUi = memo(({ setValue, value }) => {
  const setBit = bit => setValue(value | (1 << bit), { touch: true })
  const resetBit = bit => setValue(value & ~(1 << bit), { touch: true })
  const hasBit = bit => (value >> bit) % 2 !== 0
  const update = (bit, value) => (value ? setBit(bit) : resetBit(bit))

  return (
    <ButtonGroup className='py-3'>
      {new Array(8).fill(undefined).map((_, i) => {
        const on = hasBit(i)
        return (
          <Button
            key={i}
            color={on ? 'primary' : 'light'}
            onClick={() => update(i, !on)}
            active={on}
          >
            {i + 1}
          </Button>
        )
      })}
    </ButtonGroup>
  )
})

const Binary = ({ name }) => {
  const { setValue, value } = useField({ name, parse: toNum, format })
  return <BinaryUi setValue={setValue} value={value} />
}

const toNum = s => {
  const num = +s
  return num || 0
}

const format = n => n || 0

const NumberInput = ({ name, validators }) => {
  const { onChange, value, setValue } = useField({
    name,
    validators,
    parse: toNum,
    format
  })
  const onKeyDown = ev => {
    switch (ev.which) {
      case 38:
      case 107:
        ev.preventDefault()
        return setValue(value + 1)
      case 40:
      case 109:
        ev.preventDefault()
        return setValue(value - 1)
      default:
        
    }
  }
  return <Input className='py-3' value={value} onChange={onChange} onKeyDown={onKeyDown} />
}

const CustomInputForm = () => (
  <Container className='custom'>
    <h1>amiable-forms</h1>
    <p>
      Example of a custom input created for amiable-forms used to set a number
      in a binary fashion.
    </p>
    <AmiableForm>
      <NumberInput name='binary' />
      <Binary name='binary' />
    </AmiableForm>
  </Container>
)
export default CustomInputForm
