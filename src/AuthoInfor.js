import React from 'react'
import { useParams } from 'react-router-dom'

export default function AuthoInfor({ products }) {
  const { user } = useParams()
  return (
    <>
      {products
        .filter((product) => product.user === user)
        .map((item, index) => {
          const { user, userImageURL, likes, downloads } = item
          return (
            <section className='py-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-5'>
                    <img
                      src={userImageURL}
                      className='img-fluid w-100'
                      alt=''
                    />
                  </div>
                  <div className='col-md-7'>
                    <div className='m-5'>
                      <h2>Author:{user}</h2>
                      <h4 className='my-3'>DownLoads:{downloads} times</h4>
                      <h4>Likes:{likes}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
    </>
  )
}
