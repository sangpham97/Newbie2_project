import React from 'react'
import AboutImage from '../img/about.jpeg'
import { Link } from 'react-router-dom'
export default function AboutSection() {
  return (
    <section className='section about' id='about'>
      {/* title  */}

      <div className='title-wrapper'>
        <h2 className='title'>
          about <span className='subtitle'>us</span>
        </h2>
      </div>
      {/* end of title  */}
      {/* about-center */}
      <div className='section-center about-center'>
        {/* about img wrapper*/}
        <div className='about-img'>
          <img src={AboutImage} className='about-photo' alt='awesome beach' />
        </div>
        {/* about info */}
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <Link to='/About' className='btn btn-primary p-2'>
            read more
          </Link>
        </article>
      </div>
    </section>
  )
}
