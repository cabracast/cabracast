import styled from "styled-components"
import media from "styled-media-query"

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
  margin-top: var(--size-s3);
  position: relative;
  float: left;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const StyledWrapper = styled.div`
  position: relative;
  float: left;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  ${media.lessThan("medium")`
    justify-content: center;
  `}
`

export { StyledButton, StyledWrapper }
