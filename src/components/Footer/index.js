import React from "react"

import StyledFooter from "@components/Footer/styles"

import Logo from "@objects/Logo"
import { Container } from "@components/Container"

import { metadata } from "@root/configs"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <a href={metadata.siteUrl}>
          <Logo size="80"></Logo>
        </a>
      </Container>
    </StyledFooter>
  )
}

export default Footer
