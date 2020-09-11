import React from "react"
import Logo from "@objects/Logo"
import Menu from "@components/Menu"
import Container from "@components/Container"

import StyledHeader from "@components/Header/styles"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Menu />
      </Container>
    </StyledHeader>
  )
}

export default Header
