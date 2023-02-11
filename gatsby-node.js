const path = require("path");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
  type SitePage implements Node {
    context: SitePageContext
  }
  type SitePageContext {
    i18n: i18nContext
  }
  type i18nContext {
      language: String,
      languages: [String],
      defaultLanguage: String,
      originalPath: String
      routed: Boolean
  }
`)
}
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
            node_locale
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
