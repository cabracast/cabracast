import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const { pages, episodes } = data
  const { edges: dataPages } = pages
  const { edges: dataEpisodes } = episodes
  return (
    <>
      <SEO title="CabraCast" />
      <h1>Nossos Episódios</h1>
      <ul>
        {dataEpisodes.map(post => (
          <li>
            <h2>{post.node.frontmatter.title}</h2>
            <h3>{post.node.frontmatter.date}</h3>
            <a href={`/episodes/${post.node.fields.slug}`}>
              {post.node.fields.slug}
            </a>
          </li>
        ))}
      </ul>
      <h1>Páginas Internas</h1>
      <ul>
        {dataPages.map(page => (
          <li>
            <h2>{page.node.frontmatter.title}</h2>
            <h3>{page.node.frontmatter.date}</h3>
            <a href={`/pages/${page.node.fields.slug}`}>
              {page.node.fields.slug}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export const pageQuery = graphql`
  query {
    pages: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(pages).*.md$/" } }
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
    episodes: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(episodes).*.md$/" } }
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

export default IndexPage
