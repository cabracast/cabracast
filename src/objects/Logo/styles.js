import styled from "styled-components"

const StyledLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "65px")};
`

export default StyledLogo
