import React from 'react'
import { useField } from 'formik'

export default function TextInput({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name} className='d-block py-2 fw-bold'>
        {label}
      </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  )
}
