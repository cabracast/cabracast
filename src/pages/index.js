import React from "react"
import { graphql } from "gatsby"
import SEO from "@components/SEO"

const Main = ({ data }) => {
  const { episodes } = data
  const { edges: dataEpisodes } = episodes
  return (
    <>
      <SEO title="CabraCast" />
      <ul>
        <li>
          <a href="/contact">Contato</a>
        </li>
        <li>
          <a href="/team">Os Cabras</a>
        </li>
      </ul>
      <h1>Nossos Episódios</h1>
      <ul>
        {dataEpisodes.map((item, index) => (
          <li key={index}>
            <h2>{item.node.frontmatter.title}</h2>
            <h3>{item.node.frontmatter.date}</h3>
            <a href={`/episodes/${item.node.fields.slug}`}>
              {item.node.fields.slug}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query {
    episodes: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/data/(episodes).*.md$/" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
          }
        }
      }
    }
  }
`

export default Main
