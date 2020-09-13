import React from "react"
import { graphql } from "gatsby"
import * as S from "./styles"

export const Episodes = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark
  const { version, title, date, time, participants } = frontmatter
  return (
    <>
      <S.Title>{title}</S.Title>
      <p>{version}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{participants}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <a href="/">Voltar</a>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
        version
        time
        participants
      }
    }
  }
`

export default Episodes
