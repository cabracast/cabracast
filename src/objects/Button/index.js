import React from "react"

import { StyledWrapper, StyledButton } from "@objects/Button/styles"

const Button = (props) => {
  return (
    <StyledWrapper>
      <StyledButton {...props}>{props.children}</StyledButton>
    </StyledWrapper>
  )
}

export default Button
