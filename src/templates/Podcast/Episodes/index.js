import React from "react"
import { graphql } from "gatsby"
import SEO from "@components/SEO"
import * as S from "./styles"

export const Episodes = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark
  const { number, title, date, time, authors, download } = frontmatter
  return (
    <>
      <SEO title={title} />
      <S.Title>{title}</S.Title>
      <p>{number}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{authors}</p>
      <p>{download}</p>
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
        number
        time
        authors
        download
      }
    }
  }
`

export default Episodes
