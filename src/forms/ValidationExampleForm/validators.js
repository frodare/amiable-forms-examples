export const required = value => value ? undefined : 'required'

export const numeric = value =>
  (!value || /^[0-9]*?$/i.test(value)) ? undefined : 'must be numeric'

export const zip = value =>
  (!value || /^[0-9]{5}(-[0-9]{4})?$/i.test(value)) ? undefined : 'invalid zip'

export const maxLength = max => value =>
  value && value.length > max ? max + ' maximum' : undefined

export const fixedLength = l => value =>
  value && value.length !== l ? 'must be ' + l : undefined

export const maxValue = max => value =>
  value && value > max ? 'maximum value of ' + max : undefined

export const email = value =>
  (!value || /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(value)) ? undefined : 'invalid email'

export const creditcard = value => {
  if (!value) return undefined
  if (value.length !== 16) return 'invalid CC length'
  if (value.replace(/[^0-9]+/g, '') !== value) return 'invalid CC format'
  if (!luhnCheck(value)) return 'invalid CC number'
  return undefined
}

const luhnCheck = val => {
  var sum = 0
  for (var i = 0; i < val.length; i++) {
    var intVal = parseInt(val.substr(i, 1))
    if (i % 2 === 0) {
      intVal *= 2
      if (intVal > 9) {
        intVal = 1 + (intVal % 10)
      }
    }
    sum += intVal
  }
  return (sum % 10) === 0
}
