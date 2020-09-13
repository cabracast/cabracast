import styled from "styled-components"
import media from "styled-media-query"

const StyledLogo = styled.img`
  height: ${({ size }) => (size ? `${size}px` : "65px")};
  ${media.lessThan("medium")`
    height: ${({ size }) => (size ? `${size}px` : "55px")};
    margin-left: var(--size-s2);
  `}
`

export default StyledLogo
