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
        // TODO: add types alias && update imports 
      }
    }
  });
}
exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        blogs: allContentfulBlogs {
          nodes {
            slug
          }
        }
        pages: allContentfulPages {
          nodes {
            slug
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
        slug: blog.slug
      },
      path: `/${blog.slug}`,
    })
  })
  data.pages.nodes.forEach((page) => {
    createPage({
      component: path.resolve('./src/templates/page-template.tsx'),
      context: {
        slug: page.slug
      },
      path: `${page.slug}`,
    })
  })
}
