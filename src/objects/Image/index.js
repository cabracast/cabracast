import React from "react"

import {
  StyledImage,
  StyledImageContainer,
  StyledTitle,
  StyledSubtitle,
} from "@objects/Image/styles"

const Image = ({ title, subtitle }) => {
  return (
    <StyledImageContainer>
      <div className="moldure">
        <StyledImage src="assets/images/cabracast-cabra.svg"></StyledImage>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </div>
    </StyledImageContainer>
  )
}

export default Image
