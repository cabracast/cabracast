import React from "react"
import Logo from "@objects/Logo"
import Menu from "@components/Menu"
import { Container } from "@components/Container"

import { StyledHeader, StyledPosition } from "@components/Header/styles"

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledPosition>
          <Logo />
          <Menu />
        </StyledPosition>
      </Container>
    </StyledHeader>
  )
}

export default Header
