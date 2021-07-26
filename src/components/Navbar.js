import React from 'react'
import logo from '../img/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
export default function Navbar() {
  const { OpenLogin, OpenRegister } = useGlobalContext()
  return (
    <header id='home'>
      {/* navbar */}
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt='' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <FaBars />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <div className='mx-auto' />
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active' aria-current='page'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#feature'>
                  Feature
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ' href='#gallery'>
                  Gallery
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link ' href='#services'>
                  Services
                </a>
              </li>
            </ul>
            <button className='btn btn-primary' onClick={OpenLogin}>
              Login
            </button>
            <button className='btn btn-primary' onClick={OpenRegister}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
