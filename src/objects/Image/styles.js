import styled from "styled-components"

const StyledImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  float: left;
  display: flex;
  justify-content: center;
  .moldure {
    padding: var(--size-s2);
    background-color: var(--color-gray);
    border-radius: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const StyledImage = styled.img`
  height: 240px;
`

const StyledTitle = styled.h3`
  font-size: 2rem;
  font-family: "Futura-Bold";
  color: var(--color-white);
  padding-top: var(--size-s3);
  line-height: 2rem;
`

const StyledSubtitle = styled.h4`
  font-size: 3rem;
  font-family: "Futura-Bold";
  color: var(--color-yellow);
  padding-top: var(--size-s1);
  line-height: 2rem;
`

export { StyledImageContainer, StyledImage, StyledTitle, StyledSubtitle }
