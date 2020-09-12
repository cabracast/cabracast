import React from "react"

import { StyledImage, StyledImageContainer } from "@objects/Image/styles"

import ImageCabra from "@images/cabracast-cabra.svg"

const Image = ({ title, subtitle }) => {
  return (
    <StyledImageContainer>
      <StyledImage src={ImageCabra}></StyledImage>
    </StyledImageContainer>
  )
}

export default Image
