import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => {
  const { team } = data
  const { edges: dateTeam } = team
  return (
    <>
      <h1>Nosso Time</h1>
      <ul>
        {dateTeam.map((item, index) => (
          <li key={index}>
            <h2>{item.node.frontmatter.name}</h2>
            <h3>{item.node.frontmatter.subTitle}</h3>
          </li>
        ))}
      </ul>
      <a href="/">Voltar</a>
    </>
  )
}

export const pageQuery = graphql`
  query {
    team: allMarkdownRemark(
      sort: { fields: [frontmatter___name], order: ASC }
      filter: { fileAbsolutePath: { regex: "/data/(team).*.md$/" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            slug
            name
            subTitle
            description
            image
            twitter
          }
        }
      }
    }
  }
`

export default Team
