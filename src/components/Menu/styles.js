import styled from "styled-components"

const StyledMenu = styled.div`
  width: 500px;
  ul {
    position: relative;
    display: flex;
    justify-content: space-between;
    li {
      list-style: none;
      a {
        font-family: "Futura-Bold";
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 1.4rem;
      }
    }
  }
`

export default StyledMenu
