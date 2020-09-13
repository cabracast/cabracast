import styled from "styled-components"
import media from "styled-media-query"

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: var(--size-max-width-huge);
  ${media.lessThan("huge")`
    max-width: var(--size-max-width-large);
  `}
  ${media.lessThan("large")`
    max-width: var(--size-max-width-medium);
  `}
  ${media.lessThan("medium")`
    max-width: 100%;
  `}
`

const StyledContainerImage = styled.div`
  width: 30%;
  margin-right: var(--size-s4);
  ${media.lessThan("huge")`
    width: 35%;
  `}
  ${media.lessThan("large")`
    width: 40%;
  `}
  ${media.lessThan("medium")`
    width: 100%;
    margin-bottom: var(--size-s3);
  `}
`

const StyledContainerItems = styled.div`
  width: calc(70% - var(--size-s4));
  ${media.lessThan("huge")`
    width: calc(65% - var(--size-s4));
  `}
  ${media.lessThan("large")`
    width: calc(60% - var(--size-s4));
  `}
  ${media.lessThan("medium")`
    width: 100%;
  `}
`

const StyledContainerList = styled.div`
  position: relative;
  float: left;
  width: 100%;
  display: flex;
  ${media.lessThan("medium")`
    flex-direction: column;
    padding: var(--size-s3);
    width: 100%;
  `}
`

export {
  StyledContainer,
  StyledContainerImage,
  StyledContainerItems,
  StyledContainerList,
}
