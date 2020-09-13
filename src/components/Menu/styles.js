import styled from "styled-components"
import media from "styled-media-query"

const StyledMenu = styled.div`
  width: 500px;
  ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    ${media.lessThan("medium")`
      justify-content: flex-end;
    `}
    ${media.lessThan("medium")`
      li:first-child{
        display:none!important;
      }
      li{
        margin-right: var(--size-s2);
      }
    `}
    li {
      list-style: none;
      a {
        font-family: "Futura-Bold";
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 1.4rem;
        ${media.lessThan("medium")`
          font-size: 1rem;
        `}
      }
    }
  }
`

export default StyledMenu
