import styled from "styled-components"
import media from "styled-media-query"

const StyledSubtitle = styled.h2`
  font-size: 1.3rem;
  font-family: "Futura-Book";
  letter-spacing: 1px;
  padding-top: var(--size-s1);
  color: var(--color-gray-lighter);
  ${media.lessThan("huge")`
    font-size: 1.2rem;
  `}
  ${media.lessThan("large")`
    font-size: 1.1rem;
  `}
  ${media.lessThan("medium")`
    font-size: 1rem;
    text-align: center;
  `}
  ${media.lessThan("small")`
    font-size: 0.9rem;
  `}
`

export default StyledSubtitle
