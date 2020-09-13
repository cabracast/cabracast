import styled from "styled-components"
import media from "styled-media-query"

const StyledList = styled.div`
  position: relative;
  float: left;
  width: 100%;
  padding-top: var(--size-s6);
  ${media.lessThan("medium")`
    padding-top: var(--size-s2);
  `}
  ul {
    position: relative;
    float: left;
    width: 100%;
    li {
      position: relative;
      float: left;
      width: 100%;
      list-style: none;
      margin-bottom: var(--size-s6);
      ${media.lessThan("medium")`
        margin-bottom: var(--size-s2);
      `}
    }
  }
`

const StyledDecoration = styled.div`
  position: absolute;
  background-image: url("../assets/images/cabracast-image-decoration.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 430px;
  width: 490px;
  top: -67px;
  left: -87px;
  z-index: 0;
  ${media.lessThan("large")`
    left: -73px;
    width: 236px;
    top: -50px;
  `}
  ${media.lessThan("medium")`
    left: 6px;
    width: 236px;
    top: -4px;
  `}
`

export { StyledList, StyledDecoration }
