import React from "react"
import {
  StyledContainer,
  StyledContainerImage,
  StyledContainerItems,
  StyledContainerList,
} from "@components/Container/styles"

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const ContainerImage = ({ children }) => {
  return <StyledContainerImage>{children}</StyledContainerImage>
}

const ContainerItems = ({ children }) => {
  return <StyledContainerItems>{children}</StyledContainerItems>
}

const ContainerList = ({ children }) => {
  return <StyledContainerList>{children}</StyledContainerList>
}

export { Container, ContainerImage, ContainerItems, ContainerList }
