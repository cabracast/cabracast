import styled from "styled-components"
import media from "styled-media-query"

const StyledTitle = styled.h2`
  font-size: 1.2rem;
  font-family: "Futura-Book";
  color: var(--color-gray);
  padding-top: var(--size-s2);
  line-height: 2.2rem;
  ${media.lessThan("huge")`
    font-size: 1.1rem;
  `}
  ${media.lessThan("large")`
    font-size: 1rem;
    line-height: 2rem;
  `}
  ${media.lessThan("medium")`
    font-size: 0.9rem;
    line-height: 1.8rem;
    text-align: center;
  `}
  ${media.lessThan("small")`
    font-size: 0.8rem;
    line-height: 1.5rem;
  `}
`

export default StyledTitle
