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
        font-family: "Futura-Book";
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        font-size: 1.55rem;
      }
    }
  }
`

export default StyledMenu
