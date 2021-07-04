import React from 'react'
import { useFormik } from 'formik'
import Alert from '../components/Alert'
export default function DealSection() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      alert(`${JSON.stringify(values, null, 2)}`)
    },
  })
  return (
    <section className='section deals mt-3' id='deals'>
      {/* title  */}
      <div className='title-wrapper'>
        <h2 className='title'>
          hot <span className='subtitle '>deals</span>
        </h2>
      </div>
      {/* end of title  */}
      <form onSubmit={formik.handleSubmit}>
        <div className='input-group'>
          <input
            type='email'
            className='form-control'
            placeholder='your email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <span type='submit' className='btn btn-outline-primary'>
            submit
          </span>
        </div>
      </form>
    </section>
  )
}
