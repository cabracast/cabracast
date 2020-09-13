import styled from "styled-components"
import media from "styled-media-query"

const StyledHeader = styled.header`
  top: 0;
  background-color: var(--color-gray);
  position: fixed;
  height: var(--size-header);
  width: 100%;
  z-index: 100;
  ${media.lessThan("medium")`
    height: var(--size-header-small);
  `}
`

const StyledPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--size-header);
  ${media.lessThan("medium")`
    height: var(--size-header-small);
  `}
`

export { StyledHeader, StyledPosition }
