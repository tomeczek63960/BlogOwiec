const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@style": path.resolve(__dirname, "src/style"),
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
      }
    }
  });
}
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // TODO: extract contents query to fragments when gatsby 5 will be stable
  const { data } = await graphql(
    `
      {
        blogs: allContentfulBlogs {
          nodes {
            id
            slug
            title
            image {
              gatsbyImageData
            }
            shortDescription {
              shortDescription
            }
            content {
              ... on ContentfulImagesBlock {
                id
                images {
                  id
                  gatsbyImageData
                }
                internal {
                  type
                }
              }
              ... on ContentfulBanner {
                image {
                  gatsbyImageData
                }
                internal {
                  type
                }
                id
              }
              ... on ContentfulBlogsReference {
                internal {
                  type
                }
                blogReference {
                  slug
                  title
                  imageCard {
                    gatsbyImageData
                  }
                  shortDescription {
                    shortDescription
                  }
                }
                id
              }
              ... on ContentfulParallax {
                image {
                  url
                }
                internal {
                  type
                }
                id
              }
              ... on ContentfulText {
                internal {
                  type
                }
                content {
                  raw
                }
                id
              }
            }
          }
        }
      }
    `
  )

  if (data.errors) throw data.errors

  data.blogs.nodes.forEach((blog) => {
    createPage({
      component: path.resolve('./src/templates/blog-post.tsx'),
      context: {
        blog,
      },
      path: `/${blog.slug}`,
    })
  })
}
