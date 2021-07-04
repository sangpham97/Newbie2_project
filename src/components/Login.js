import React from 'react'
import { useGlobalContext } from './context'
import TextInput from './TextInput'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

export default function Login() {
  const { CloseLogin, LoginModal } = useGlobalContext()
  return (
    <>
      {LoginModal && (
        <div className='modal-video'>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object({
              email: Yup.string().required('Required'),
              password: Yup.number().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            <div className='row'>
              <div className='col col-md-4 mx-auto'>
                <Form className='modal__content'>
                  <button
                    className='btn btn-danger d-block position-absolute top-0 end-0 m-2'
                    onClick={CloseLogin}
                  >
                    X
                  </button>
                  <div className='p-4 mx-3'>
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
                      placeholder='Your Password'
                    />
                    <button
                      type='submit'
                      className='btn btn-primary d-block my-3'
                    >
                      Login
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </Formik>
        </div>
      )}
    </>
  )
}
