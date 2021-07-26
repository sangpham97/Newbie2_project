import React from 'react'

export default function AuthoInfor({ userImageURL, user, downloads, likes }) {
  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5'>
              <h2 className='text-center mt-2'>{user}</h2>
              <img src={userImageURL} className='img-fluid w-100' alt='' />
            </div>
            <div className='col-md-7'>
              <div className='mt-5'>
                <h4 className='mt-4'>DownLoads:{downloads} times</h4>
                <h4>Likes:{likes}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
