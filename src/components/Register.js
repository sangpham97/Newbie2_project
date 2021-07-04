import React from 'react'
import { Formik, Form } from 'formik'
import TextInput from './TextInput'
import * as Yup from 'yup'
import { useGlobalContext } from './context'

export default function Register() {
  const { CloseRegister, isRegister } = useGlobalContext()
  return (
    <>
      {isRegister && (
        <div className='modal-video'>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              // acceptedTerms: false, // added for our checkbox
              // jobType: '', // added for our select
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
              lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              password: Yup.number()
                .min(9, "Password's length at least 9")
                .required('Required'),
              // acceptedTerms: Yup.boolean()
              //   .required('Required')
              //   .oneOf([true], 'You must accept the terms and conditions.'),
              // jobType: Yup.string()
              //   .oneOf(
              //     ['designer', 'development', 'product', 'other'],
              //     'Invalid Job Type'
              //   )
              //   .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            <div className='row'>
              <div className='col col-md-5 mx-auto'>
                <Form className='modal__content p-5'>
                  <h1 className='mt-4'>Sign Up!</h1>
                  <button
                    className='btn btn-danger d-block position-absolute top-0 end-0 m-2'
                    onClick={CloseRegister}
                  >
                    X
                  </button>
                  <TextInput
                    label='First Name'
                    name='firstName'
                    type='text'
                    placeholder='Jane'
                  />

                  <TextInput
                    label='Last Name'
                    name='lastName'
                    type='text'
                    placeholder='Doe'
                  />

                  <TextInput
                    label='Email Address'
                    name='email'
                    type='email'
                    placeholder='jane@formik.com'
                  />
                  <TextInput
                    label='Password'
                    name='password'
                    type='password'
                    placeholder='Password'
                  />

                  <button
                    type='submit'
                    className='btn btn-primary d-block my-3'
                  >
                    Submit
                  </button>
                </Form>
              </div>
            </div>
          </Formik>
        </div>
      )}
    </>
  )
}
