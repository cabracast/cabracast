import styled from "styled-components"

const StyledButton = styled.button`
  background-color: var(--color-gray-light);
  border-radius: 40px;
  color: var(--color-white);
  border: none;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "Futura-Bold";
  padding: 15px 40px;
  min-width: 250px;
  margin-top: var(--size-s4);
  position: relative;
  float: left;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

export default StyledButton
