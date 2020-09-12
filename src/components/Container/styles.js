import styled from "styled-components"

const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: var(--size-max-width);
`

const StyledContainerImage = styled.div`
  width: 400px;
`

const StyledContainerItems = styled.div`
  width: calc(100% - 400px);
`

const StyledContainerList = styled.div`
  display: flex;
`

export {
  StyledContainer,
  StyledContainerImage,
  StyledContainerItems,
  StyledContainerList,
}
