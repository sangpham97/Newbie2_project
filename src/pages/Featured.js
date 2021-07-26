import React from 'react'
import { useGlobalContext } from '../components/context'
import Carousel from '../components/Carousel'
import AuthoInfor from '../AuthoInfor'

export default function Featured() {
  const { products, Author } = useGlobalContext()
  return (
    <div>
      <>
        <Carousel products={products}></Carousel>
        <AuthoInfor {...Author} />
      </>
    </div>
  )
}
