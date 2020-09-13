import styled from "styled-components"
import media from "styled-media-query"

const StyledDateTime = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Futura-Bold";
  color: var(--color-gray);
  padding-top: var(--size-s2);
  ${media.lessThan("huge")`
    font-size: 1.9rem;
  `}
  ${media.lessThan("large")`
    font-size: 1.8rem;
  `}
  ${media.lessThan("medium")`
    font-size: 1.5rem;
    text-align: center;
  `}
  ${media.lessThan("small")`
    font-size: 1.3rem;
  `}
`

export default StyledDateTime
