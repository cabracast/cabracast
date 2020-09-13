const transformEpisodes = (data) => {
  const { episodes } = data
  const { edges } = episodes
  return edges.map((item) => {
    const {
      version,
      title,
      subtitle,
      date,
      url,
      time,
      participants,
      categories,
    } = item.node.frontmatter
    const { slug } = item.node.fields
    const { excerpt: text } = item.node
    return {
      version,
      title,
      subtitle,
      date,
      url,
      time,
      participants,
      categories,
      text,
      slug,
    }
  })
}

const transformTeam = (data) => {
  const { team } = data
  const { edges } = team
  return edges.map((item) => {
    const {
      name,
      subTitle,
      description,
      image,
      twitter,
    } = item.node.frontmatter
    const { slug } = item.node.fields
    return {
      name,
      subTitle,
      description,
      image,
      twitter,
      slug,
    }
  })
}

export { transformEpisodes, transformTeam }
