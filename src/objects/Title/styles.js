import styled from "styled-components"
import media from "styled-media-query"

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-family: "Futura-Bold";
  color: var(--color-gray);
  ${media.lessThan("huge")`
    font-size: 2.4rem;
  `}
  ${media.lessThan("large")`
    font-size: 2rem;
  `}
  ${media.lessThan("medium")`
    font-size: 1.8rem;
    text-align: center;
  `}
  ${media.lessThan("small")`
    font-size: 1.5rem;
  `}
`

const StyledTitleContact = styled.h2`
  margin-top: var(--size-s4);
  margin-bottom: var(--size-s4);
  font-size: 2rem;
  font-family: "Futura-Book";
  color: var(--color-gray);
  text-align: center;
  ${media.lessThan("huge")`
    font-size: 1.9rem;
  `}
  ${media.lessThan("large")`
    font-size: 1.8rem;
  `}
  ${media.lessThan("medium")`
    font-size: 1.7rem;
  `}
  ${media.lessThan("small")`
    font-size: 1.5rem;
  `}
`

export { StyledTitle, StyledTitleContact }
