import React from "react"

import StyledLogo from "@objects/Logo/styles"

import { metadata } from "@root/configs"

const Logo = (props) => {
  return (
    <a href={metadata.siteUrl}>
      <StyledLogo {...props} src="/assets/images/cabracast-logo.svg" />
    </a>
  )
}

export default Logo
