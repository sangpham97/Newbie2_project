import React from 'react'
import { useGlobalContext } from '../components/context'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
import AuthoInfor from '../AuthoInfor'

export default function Featured() {
  const { products } = useGlobalContext()
  return (
    <div>
      <>
        <Carousel products={products}></Carousel>
        <AuthoInfor products={products} />
      </>
    </div>
  )
}
