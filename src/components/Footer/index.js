import React from "react"

import StyledFooter from "@components/Footer/styles"

import Logo from "@objects/Logo"
import { Container } from "@components/Container"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo size="80"></Logo>
      </Container>
    </StyledFooter>
  )
}

export default Footer
