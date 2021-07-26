import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
export default function FeatureItem({ product }) {
  const { largeImageURL, likes, views, user, tags, id } = product
  const { setAuthor } = useGlobalContext()
  return (
    <article className='tour-card' key={id}>
      <div className='tour-img-container'>
        <Link to={`/Feature/${user}`} onClick={() => setAuthor(product)}>
          <img src={largeImageURL} className='img-fluid w-100' alt='' />
          <p className='tour-date'>august 14th, 2019</p>
        </Link>
      </div>
      {/* tour footer */}
      <div className='tour-footer'>
        <h4 className='tour-title'>{user}</h4>
        {/* tour info */}
        <div className='tour-info'>
          <p className='tour-country'>
            <span>
              <i className='fas fa-map' />
              {tags}
            </span>
          </p>
          <div className='tour-details'>
            <p>
              <span className='fw-bold'>Like:</span> {likes}
            </p>
            <p>
              <span className='fw-bold'> View:</span> {views}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
