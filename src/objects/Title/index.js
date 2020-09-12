import React from "react"

import { StyledTitle, StyledTitleContact } from "@objects/Title/styles"

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

const TitleContact = ({ children }) => {
  return <StyledTitleContact>{children}</StyledTitleContact>
}

export { TitleContact }
export default Title
