import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ServiceSection from '../components/ServiceSection'
import AboutSection from '../components/AboutSection'
import FeatureTourList from '../components/FeatureTourList'
import DealSection from '../components/DealSection'
import GalleryCollection from '../components/GalleryCollection'

export default function Home() {
  return (
    <div>
      <Hero hero='hero'>
        <Banner>
          <div className='hero-banner'>
            <h1 className='hero-title'>continue exploring</h1>
            <p className='hero-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              explicabo debitis est autem dicta.
            </p>
            <a href='#featured' className='btn btn-primary p-3 scroll-link'>
              explore tours
            </a>
          </div>
        </Banner>
      </Hero>
      <AboutSection />
      <ServiceSection />
      <FeatureTourList />
      <GalleryCollection />
      <DealSection />
    </div>
  )
}
