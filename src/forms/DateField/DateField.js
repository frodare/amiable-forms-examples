import React from 'react'
import { useField } from 'amiable-forms'
import DatePicker from 'react-datepicker'
import fnsFormat from 'date-fns/format'
import fnsParse from 'date-fns/parse'
import isValid from 'date-fns/isValid'

import 'react-datepicker/dist/react-datepicker.css'
import './DateField.scss'

const dateFormats = {
  DISPLAY_DATETIME: 'M/d/yyyy h:mm:ss a',
  DISPLAY_DATE: 'M/d/yyyy',
  MACHINE_DATE: 'yyyy-MM-dd',
  MACHINE_DATETIME: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
}

export const parse = date => {
  if (typeof date === 'string') {
    date = format(date)
  }
  try {
    const ts = fnsFormat(date, dateFormats.MACHINE_DATE)
    return ts
  } catch (err) {
    return undefined
  }
}

export const format = ts => {
  if (!ts) return undefined
  try {
    const date = fnsParse(ts, dateFormats.MACHINE_DATE, new Date(0))
    if (!isValid(date)) return undefined
    return date
  } catch (err) {
    return undefined
  }
}

const DateField = ({ name, label, validators, maxDate }) => {
  const field = useField({ name, validators, parse, format })
  const { value, onFocus, onBlur, valid, visited, setValue, submitted } = field
  const onChange = date => setValue(date, { touch: true })
  return (
    <DatePicker
      name={name}
      className={'form-control ' + (!valid && (visited || submitted) ? 'is-invalid' : '')}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      selected={value}
      maxDate={maxDate}
      placeholderText='MM/DD/YYYY'
      disabledKeyboardNavigation
    />
  )
}

export default DateField
