const feedOptions = {
  title: "title",
  description: "description",
  feed_url: "https://cabracast.github.io/rss.xml",
  site_url: "https://cabracast.github.io/",
  image_url: "https://cabracast.github.io/images/icon.png",
  docs: "https://cabracast.github.io/docs",
  managingEditor: "Dylan Greene",
  webMaster: "Dylan Greene",
  copyright: "2013 Dylan Greene",
  language: "en",
  categories: ["Category 1", "Category 2", "Category 3"],
  pubDate: "May 20, 2019 04:00:00 GMT",
  ttl: "60",
  custom_namespaces: {
    itunes: "http://www.itunes.com/dtds/podcast-1.0.dtd",
  },
  custom_elements: [
    { "itunes:subtitle": "A show about everything" },
    { "itunes:author": "John Doe" },
    {
      "itunes:summary":
        "All About Everything is a show about everything. Each week we dive into any subject known to man and talk about it as much as we can. Look for our podcast in the Podcasts app or in the iTunes Store",
    },
    {
      "itunes:owner": [
        { "itunes:name": "John Doe" },
        { "itunes:email": "john.doe@example.com" },
      ],
    },
    {
      "itunes:image": {
        _attr: {
          href: "http://example.com/podcasts/everything/AllAboutEverything.jpg",
        },
      },
    },
    {
      "itunes:category": [
        {
          _attr: {
            text: "Technology",
          },
        },
        {
          "itunes:category": {
            _attr: {
              text: "Gadgets",
            },
          },
        },
      ],
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `CabraCast`,
    position: ``,
    description: ``,
    author: `@cabracast`,
    siteUrl: `https://cabracast.github.io/`,
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@pages": "src/pages",
          "@templates": "src/templates",
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `episodes`,
        path: `${__dirname}/episodes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/pages`,
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
