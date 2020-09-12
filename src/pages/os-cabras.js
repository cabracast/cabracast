import React from "react"
import { graphql } from "gatsby"
import SearchEngine from "@components/SearchEngine"
import GlobalStyles from "@components/GlobalStyles"
import Header from "@components/Header"
import Content from "@components/Content"
import ListTeam from "@components/ListTeam"
import Footer from "@components/Footer"

import { transformTeam } from "@helpers"

const Team = ({ data }) => {
  const dataTeam = transformTeam(data)
  return (
    <>
      <GlobalStyles />
      <SearchEngine title="CabraCast" />
      <Header />
      <Content>
        <ListTeam data={dataTeam}></ListTeam>
      </Content>
      <Footer />
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
