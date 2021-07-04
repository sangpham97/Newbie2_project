import React from 'react'
import styled from 'styled-components'
import Image from '../img/about.jpeg'
import Staff from '../img/staff.jpg'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
export default function AboutInfo() {
  return (
    <>
      <AboutHero Image={Image}>
        <Banner>
          <h1 className='py-3 border-bottom '>About Us</h1>
          <Link to='/' className='btn btn-primary'>
            Back to Home
          </Link>
        </Banner>
      </AboutHero>
      <section className='p-4'>
        <h1 className='text-center'>Our Staff</h1>
        <div className='col-xxl-8 px-4 py-5'>
          <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <img
                src={Staff}
                className='d-block mx-lg-auto img-fluid'
                alt='Bootstrap Themes'
                loading='lazy'
              />
            </div>
            <div className='col-lg-6'>
              <h1 className='display-5 fw-bold lh-1 mb-3'>John Doe</h1>
              <p className='lead'>
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <button
                  type='button'
                  className='btn btn-primary btn-lg px-4 me-md-2'
                >
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {-----------------------} */}
    </>
  )
}

const AboutHero = styled.div`
  min-height: 100vh;
  min-height: calc(100vh - 62px);
  background: url(${(props) => props.Image}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: black;
    font-size: 4rem;
  }
  button {
    font-size: 1.4rem;
  }
`
