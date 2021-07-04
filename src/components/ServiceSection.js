import React from 'react'
import ServiceItem from './ServiceItem'
import { services } from '../service'

export default function ServiceSection() {
  return (
    <section className='section services' id='services'>
      {/* title  */}
      <div className='title-wrapper'>
        <h2 className='title'>
          our <span className='subtitle'>services</span>
        </h2>
      </div>
      {/* end of title  */}
      <div className='section-center services-center'>
        {services.map((service, index) => {
          return <ServiceItem key={index} service={service} />
        })}
      </div>
    </section>
  )
}
