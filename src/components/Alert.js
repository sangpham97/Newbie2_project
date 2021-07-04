import React from 'react'

export default function Alert({ text }) {
  return (
    <div className='alert alert-success' role='alert'>
      <h4 className='alert-heading'>Well done!</h4>
      <p>{text}</p>
    </div>
  )
}
