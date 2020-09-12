const transformEpisodes = (data) => {
  const { episodes } = data
  const { edges } = episodes
  return edges.map((item) => {
    const { title, date } = item.node.frontmatter
    const { slug } = item.node.fields
    const { excerpt: text } = item.node
    return {
      title,
      date,
      slug,
      text,
    }
  })
}

export { transformEpisodes }
