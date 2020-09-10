import React from 'react'
import { AmiableForm, Debug } from 'amiable-forms'
import DateField from './DateField'

const DateFieldForm = () => {
  return (
    <AmiableForm process={process}>
      <DateField name='date1' />
      <Debug />
    </AmiableForm>
  )
}

DateFieldForm.title = 'DateField Example'
DateFieldForm.description = 'An example form showing an example date field using react-datepicker.'

export default DateFieldForm
