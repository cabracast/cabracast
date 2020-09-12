import React from "react"
import StyledMenu from "@components/Menu/styles"

const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/os-cabras">Os Cabras</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </StyledMenu>
  )
}

export default Menu
