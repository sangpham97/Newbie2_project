import React from 'react'
import { useParams } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import styled from 'styled-components'

// install Swiper modules
SwiperCore.use([Navigation])

export default function Carousel({ products }) {
  const { user } = useParams()

  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        className='mySwiper'
      >
        {products
          .filter((product) => product.user === user)
          .map((item, index) => {
            const { largeImageURL } = item
            return (
              <SwiperSlide>
                <Image src={largeImageURL} alt=''></Image>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}

const Image = styled.img`
  width: 100%;
  height: calc(100vh - 62px);
`
