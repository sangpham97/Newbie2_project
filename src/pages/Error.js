import React from 'react'
import styled from 'styled-components'
import Image from '../img/about.jpeg'
export default function Error() {
  return (
    <ErrorForm image={Image}>
      <h1>Back to Home</h1>
    </ErrorForm>
  )
}

const ErrorForm = styled.div`
  background: ${(props) => props.Image} center/cover/no-repeat;
  height: 100vh;
  max-height: (100vh-36px);
`
