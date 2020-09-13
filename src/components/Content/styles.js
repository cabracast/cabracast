import styled from "styled-components"
import media from "styled-media-query"

const StyledContent = styled.div`
  position: relative;
  float: left;
  width: 100%;
  margin-top: var(--size-header);
  ${media.lessThan("medium")`
    margin-top: var(--size-header-small);
  `}
`

export default StyledContent
