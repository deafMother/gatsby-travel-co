const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  // use contentfull data to programatically create pages
  const { createPage } = actions

  // first make the pages
  const { data } = await graphql(`
    query {
      tours: allContentfulTours {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: "tours/" + node.slug,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
