import styled from "styled-components"

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: var(--size-max-width);
`

const StyledContainerImage = styled.div`
  width: 30%;
  margin-right: 50px;
`

const StyledContainerItems = styled.div`
  width: calc(70% - 50px);
`

const StyledContainerList = styled.div`
  position: relative;
  float: left;
  width: 100%;
  display: flex;
`

export {
  StyledContainer,
  StyledContainerImage,
  StyledContainerItems,
  StyledContainerList,
}
