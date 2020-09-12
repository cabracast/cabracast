import styled from "styled-components"

const StyledHeader = styled.header`
  top: 0;
  background-color: var(--color-gray);
  position: fixed;
  height: var(--size-header);
  width: 100%;
  z-index: 100;
`

const StyledPosition = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--size-header);
`

export { StyledHeader, StyledPosition }
