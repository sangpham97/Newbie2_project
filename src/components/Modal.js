import React from 'react'
import { useGlobalContext } from './context'

export default function Modal({ video }) {
  const { CloseModal } = useGlobalContext()

  return (
    <div className='modal-video'>
      <div className='container '>
        <div className='row '>
          <div className='col col-md-7 mx-auto modal__content'>
            <span
              className='close_modal fw-bold btn btn-danger m-1'
              onClick={CloseModal}
            >
              X
            </span>
            <iframe
              width='600'
              height='300'
              className='img-fluid w-100 my-3'
              src={video.link}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
