import fs from 'fs-extra'
import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import path from 'path'

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
    createNodeField({
      node,
      name: `layout`,
      // eslint-disable-next-line dot-notation
      value: node['frontmatter']['layout']
    })
  }
}

/* Right now we only support page creation for posts, see `fields: { layout: { eq: "post" } }` in query */
export const createPages: GatsbyNode['createPages'] = ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allMarkdownRemark(limit: $limit, filter: { fields: { layout: { eq: "post" } } }) {
          edges {
            node {
              fields {
                slug
                layout
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    // eslint-disable-next-line dot-notation
    result.data['allMarkdownRemark'].edges.forEach((edge) => {
      const { slug } = edge.node.fields
      const { layout } = edge.node.fields
      createPage({
        path: slug,
        // This will automatically resolve the template to a corresponding
        // `layout` frontmatter in the Markdown.
        //
        // Feel free to set any `layout` as you'd like in the frontmatter, as
        // long as the corresponding template file exists in src/templates.
        // If no template is set, it will fall back to the default `page`
        // template.
        //
        // Note that the template has to exist first, or else the build will fail.
        component: path.join(__dirname, `../src/templates/${layout || 'page'}.tsx`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug
        }
      })
    })
  })
}

export const onPostBuild: GatsbyNode['onPostBuild'] = ({ reporter }) => {
  reporter.info('copy translation files')
  fs.copySync(path.join(__dirname, '../src/locales'), path.join(__dirname, '../public/locales'))
}
