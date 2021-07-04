import React, { useState } from 'react'
import FeatureItem from './FeatureItem'
// import Loading from '../components/Loading'
import { useGlobalContext } from './context'

export default function FeatureTourList() {
  const { products, setTerm } = useGlobalContext()
  const [text, setText] = useState('')
  // console.log(products)

  const handleChange = (e) => {
    e.preventDefault()
    setTerm(text)
  }

  return (
    <section className='section featured-tours' id='featured'>
      {/* title  */}

      <div className='title-wrapper'>
        <h2 className='title'>
          featured <span className='subtitle'>tours</span>
        </h2>
        <form className='' onSubmit={handleChange}>
          <div className='container py-4'>
            <div className='row'>
              <div className='col col-md-6 col-sm-12 mx-auto'>
                <div className='form-wrapper d-flex'>
                  <input
                    className='form-control mx-3'
                    type='search'
                    placeholder='Search'
                    aria-label='Search'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button className='btn btn-outline-success' type='submit'>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* end of title  */}
      {/* featured-center */}
      <div className='section-center featured-center '>
        {products.length === 0 && (
          <div className='mx-auto'>
            <h1>No Image for you !</h1>
          </div>
        )}
        {products.map((product) => {
          return <FeatureItem product={product} />
        })}
      </div>
    </section>
  )
}
