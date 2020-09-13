import React from "react"
import { graphql } from "gatsby"
import SearchEngine from "@components/SearchEngine"
import GlobalStyles from "@components/GlobalStyles"
import Header from "@components/Header"
import Content from "@components/Content"
import List from "@components/List"
import Footer from "@components/Footer"

import { transformEpisodes } from "@helpers"

const Index = ({ data }) => {
  const dataEpisodes = transformEpisodes(data)
  return (
    <>
      <GlobalStyles />
      <SearchEngine title="CabraCast" />
      <Header />
      <Content>
        <List data={dataEpisodes}></List>
      </Content>
      <Footer />
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
            version
            url
            time
            subtitle
          }
        }
      }
    }
  }
`

export default Index
