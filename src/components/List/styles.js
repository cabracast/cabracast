import styled from "styled-components"

const StyledList = styled.div`
  position: relative;
  float: left;
  width: 100%;
  padding-top: var(--size-s6);
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
    }
  }
`

const StyledDecoration = styled.div`
  position: absolute;
  background-image: url("assets/images/cabracast-image-decoration.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 430px;
  width: 490px;
  top: -67px;
  left: -87px;
  z-index: 0;
`

export { StyledList, StyledDecoration }
