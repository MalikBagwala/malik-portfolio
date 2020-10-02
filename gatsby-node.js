exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query allContentfulWork {
      allContentfulWork {
        edges {
          node {
            contentful_id
            slug
            description {
              id
            }
          }
        }
      }
    }
  `)
  data.allContentfulWork.edges.forEach((edge) => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(
        `./src/components/templates/work-detail/work-detail.component.jsx`
    ),
      context: { slug: slug },
    })
  })
}
