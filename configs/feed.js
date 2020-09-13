module.exports = {
  title: "title",
  description: "description",
  feed_url: "https://www.cabracast.com/rss.xml",
  site_url: "https://www.cabracast.com/",
  image_url: "https://www.cabracast.com/assets/images/icon.png",
  docs: "https://www.cabracast.com/docs",
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
