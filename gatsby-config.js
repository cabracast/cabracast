const { feed: feedOptions, metadata } = require("./configs")

module.exports = {
  siteMetadata: metadata,
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@images": "src/images",
          "@objects": "src/objects",
          "@styles": "src/styles",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@validations": "src/validations",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/data/episodes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team`,
        path: `${__dirname}/data/team`,
      },
    },
    {
      resolve: `gatsby-plugin-podcast-feed`,
      options: {
        feedOptions,
      },
    },
  ],
}
