// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'
import path from 'path'

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx` && node.parent.sourceInstanceName === `subject`) {
    const [subjectId, lang] = node.parent.name.split('.')

    createNodeField({ node, name: `subjectId`, value: subjectId })
    createNodeField({ node, name: `lang`, value: lang })
    createNodeField({ node, name: `type`, value: `subject` })
  }
}

export const onCreatePage: GatsbyNode['onCreatePage'] = ({ actions, page }) => {
  const { createPage, deletePage } = actions
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const i18nData = page.context.i18n as any
  const subject = page.context.subject as any

  if (i18nData && i18nData.routed === false && i18nData.originalPath === i18nData.path) {
    const defaultLanguage = i18nData.languages.indexOf(i18nData.defaultLanguage) !== -1 ? i18nData.defaultLanguage : i18nData.languages[0]
    deletePage(page)
    createPage({
      path: page.path,
      context: {
        // ...page.context,
        i18n: {
          ...page.context.i18n,
          language: defaultLanguage
        },
        language: defaultLanguage,
        redirect: {
          from: page.path,
          to: `/${defaultLanguage}${page.path}`
        }
      },
      component: path.join(__dirname, '../src/utils/redirect.tsx')
    })
  } else if (subject) {
    const lang = page.context.i18n.language
    const localizedSubject = subject.localizedData.find((l) => l.lang === lang)

    deletePage(page)
    if (localizedSubject) {
      createPage({
        path: page.path,
        context: {
          ...page.context,
          subject: undefined,
          mdxId: localizedSubject.localizedId,
          subjectId: subject.subjectId,
          subjectShortName: subject.id
        },
        component: localizedSubject.contentFilePath
          ? `${page.component}?__contentFilePath=${localizedSubject.contentFilePath}`
          : page.component
      })
    }
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const subjectsQuery = await graphql(`
    query loadPagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "subject" } }) {
        edges {
          node {
            id
            name
            extension
            absolutePath
            relativeDirectory
            childMdx {
              id
            }
          }
        }
      }
    }
  `)

  if (subjectsQuery.errors) {
    throw subjectsQuery.errors
  }

  const subjects = subjectsQuery.data.allFile.edges
    .filter((edge) => edge.node.extension === 'yml')
    .map((edge) => ({
      id: edge.node.name,
      subjectId: edge.node.id,
      localizedData: subjectsQuery.data.allFile.edges
        .filter((e) => e.node.extension === 'mdx')
        .filter((e) => e.node.name.split('.')[0] === edge.node.name)
        .map((e) => ({
          lang: e.node.name.split('.')[1],
          contentFilePath: e.node.absolutePath,
          localizedId: e.node.id
        }))
    }))

  subjects.forEach((subject) => {
    createPage({
      path: `/education/${subject.id}`,
      component: path.join(__dirname, `../src/templates/subject.tsx`),
      context: { subject }
    })
  })
}
/*
export const onPostBuild: GatsbyNode['onPostBuild'] = ({ reporter }) => {
  reporter.info('copy translation files')
  fs.copySync(path.join(__dirname, '../src/locales'), path.join(__dirname, '../public/locales'))
}
*/
