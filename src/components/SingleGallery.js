import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useGlobalContext } from './context'
import Modal from './Modal'
export default function SingleGallery({ Image }) {
  const { isOpenModal, OpenModal, video } = useGlobalContext()
  // console.log(Image.link)

  // console.log(Image)
  return (
    <div className='gallery-img-container' key={Image.id}>
      <img src={Image.img} className='gallery-img' alt='' />
      <span className='gallery-icon' onClick={() => OpenModal(Image)}>
        <BsSearch />
      </span>
      {isOpenModal && <Modal video={video} />}
    </div>
  )
}
