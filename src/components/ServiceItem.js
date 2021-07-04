import React from 'react'

export default function ServiceItem({ service }) {
  const { id, title, icon, text } = service
  return (
    <article className='service' key={id}>
      <span className='service-icon'>{icon}</span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
      </div>
    </article>
  )
}
