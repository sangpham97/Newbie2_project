import React from 'react'
import SingleGallery from './SingleGallery'
import { Images } from '../img/ImageData'
export default function GalleryCollection() {
  return (
    <section id='gallery' className='gallery py-5'>
      {/* title  */}
      <div className='title-wrapper '>
        <h2 className='title'>
          our <span className='subtitle '>gallery</span>
        </h2>
      </div>
      {/* end of title  */}
      <div className='gallery-center'>
        {Images.map((Image) => {
          return <SingleGallery Image={Image} />
        })}
      </div>
    </section>
  )
}
