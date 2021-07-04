import React from 'react'

export default function Footer() {
  return (
    <footer className='section footer'>
      {/* footer links */}
      <div className='footer-links'>
        <a href='#home' className='footer-link scroll-link'>
          home
        </a>
        <a href='#about' className='footer-link scroll-link'>
          about
        </a>
        <a href='#services' className='footer-link scroll-link'>
          services
        </a>
        <a href='#featured' className='footer-link scroll-link'>
          featured
        </a>
        <a href='#gallery' className='footer-link scroll-link' scroll-link>
          gallery
        </a>
      </div>
      <p className='copyright'>
        copyright © Backroads travel tours company
        <span id='date' />. all rights reserved
      </p>
    </footer>
  )
}
