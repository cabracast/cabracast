import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SearchEngine({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const url = site.siteMetadata.siteUrl
  const ogImage = `${url}${image || "/assets/img/cover.png"}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription || "",
        },
        {
          property: `og:title`,
          content: title || "",
        },
        {
          property: `og:description`,
          content: metaDescription || "",
        },
        {
          property: `og:image`,
          content: ogImage || "",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage || "",
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author || "",
        },
        {
          name: `twitter:title`,
          content: title || "",
        },
        {
          name: `twitter:description`,
          content: metaDescription || "",
        },
      ]}
    />
  )
}

export default SearchEngine
