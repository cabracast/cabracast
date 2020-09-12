import React from "react"
import StyledContent from "@components/Content/styles"

import { Container } from "@components/Container"

const Content = ({ children }) => {
  return (
    <Container>
      <StyledContent>{children}</StyledContent>
    </Container>
  )
}

export default Content
