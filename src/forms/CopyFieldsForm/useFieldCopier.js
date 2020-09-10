import { useCallback } from 'react'
import { useForm } from 'amiable-forms'

const switchPrefix = ({ from, to }) => name => to + name.substring(from.length)

const copyKeys = ({ copyFromPrefix, copyToPrefix }) => values => {
  const nameSwitcher = switchPrefix({ from: copyFromPrefix, to: copyToPrefix })

  return Object.entries(values).reduce((values, [key, value]) => {
    if (key.startsWith(copyFromPrefix)) {
      const toKey = nameSwitcher(key)
      values = { ...values, [toKey]: value }
    }

    if (!key.startsWith(copyToPrefix)) {
      values = { ...values, [key]: value }
    }

    return values
  }, {})
}

const useFieldCopier = ({ copyFromPrefix, copyToPrefix }) => {
  const { setValues } = useForm({ shouldUpdate: () => false })

  const copy = useCallback(() => {
    setValues(copyKeys({ copyFromPrefix, copyToPrefix }))
  }, [setValues, copyFromPrefix, copyToPrefix])

  return copy
}

export default useFieldCopier
