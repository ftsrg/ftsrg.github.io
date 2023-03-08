import Layout from '~layout/Layout'
import React from 'react'
import TopHero from '~components/TopHero'
import Breadcrumbs from '~components/Breadcrumbs'
import { graphql, PageProps } from 'gatsby'
import { MemberProps, SubjectProps } from '~utils/props'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { ExternalInstructorProps, FtsrgInstructorProps } from '~utils/props/subject.props'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaUser } from 'react-icons/fa'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { MDXProvider } from '@mdx-js/react'

interface SubjectTemplateProps extends PageProps {
  data: {
    subject: SubjectProps & { parent: { name: string } }
    subjectMdx: {
      frontmatter: SubjectProps
    }
    members: {
      edges: [{ node: MemberProps }]
    }
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any,jsx-a11y/heading-has-content,react/jsx-props-no-spreading */
const components = {
  h1: (props: any) => {
    const { children, ...rest } = props
    return (
      <h2 className="section-title-underline" {...rest}>
        <span>{children}</span>
      </h2>
    )
  },
  h2: (props: any) => {
    return <h3 className="text-black" {...props} />
  },
  h3: (props: any) => {
    return <h4 className="text-black" {...props} />
  },
  h4: (props: any) => {
    return <h5 className="text-black" {...props} />
  },
  p: (props: any) => {
    return <p style={{ textAlign: 'justify' }} {...props} />
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any,jsx-a11y/heading-has-content,react/jsx-props-no-spreading */

const SubjectTemplate: React.FC<SubjectTemplateProps> = ({ data, children }) => {
  const { t, language } = useI18next()

  const subjectData = data.subject
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(data.subjectMdx.frontmatter)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (data.subjectMdx.frontmatter[key]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      subjectData[key] = data.subjectMdx.frontmatter[key]
    }
  }

  function FtsrgPersonTemplate(ftsrgCoordinator: FtsrgInstructorProps, members: MemberProps[]) {
    const { mitId } = ftsrgCoordinator
    // eslint-disable-next-line react/destructuring-assignment
    const member = members.find((m) => m.mitId === mitId)

    if (member) {
      const avatarImage = member.avatar ? getImage(member.avatar) : null
      const name = t('commons.members.name', { firstName: member.firstName, lastName: member.lastName })
      return (
        <AnchorLink to={`/${language}/about#${member.mitId}`} title={name}>
          <span className="coordinator">
            {avatarImage && <GatsbyImage image={avatarImage} className="img-fluid" alt={name} />}
            {!avatarImage && <FaUser className="img-fluid" />}
            {name}
          </span>
        </AnchorLink>
      )
    }
    return <span />
  }

  function ExternalPersonTemplate(externalCoordinator: ExternalInstructorProps) {
    const { firstName, lastName } = externalCoordinator
    return (
      <span className="coordinator">
        <FaUser className="img-fluid" />
        {t('commons.members.name', { firstName, lastName })}
      </span>
    )
  }

  function PersonTemplate(coordinator: FtsrgInstructorProps | ExternalInstructorProps, members: MemberProps[]) {
    if (coordinator.type === 'ftsrg') {
      return FtsrgPersonTemplate(coordinator, members)
    }
    return ExternalPersonTemplate(coordinator)
  }

  return (
    <Layout href={`/education/${subjectData.parent.name}`}>
      <TopHero heroTitle={subjectData.subjectName} heroDesc={subjectData.subjectDescription} bgImage={subjectData.coverImage} />
      <Breadcrumbs title={subjectData.subjectName} subpages={[{ title: 'nav.education.title', link: '/education' }]} />

      <div className="container subject-page">
        <div className="float-lg-end ms-lg-5 mb-4 subject-datasheet">
          <h2 className="section-title-underline">
            <span>{t('education.subjects.datasheet.title')}</span>
          </h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <span>{t('education.subjects.datasheet.name')}</span>
                </td>
                <td className="px-2">{t(subjectData.subjectName)}</td>
              </tr>
              <tr>
                <td>
                  <span>{t('education.subjects.datasheet.type')}</span>
                </td>
                <td className="px-2">{t(subjectData.type)}</td>
              </tr>
              <tr>
                <td>
                  <span>{t('education.subjects.datasheet.code')}</span>
                </td>
                <td className="px-2">
                  <a
                    href={`https://portal.vik.bme.hu/kepzes/targyak/${subjectData.subjectCode}/${language}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(subjectData.subjectCode)}
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <span>{t('education.subjects.datasheet.seniorLecturer')}</span>
                </td>
                <td className="px-2 d-flex flex-column align-items-start">
                  {PersonTemplate(
                    subjectData.seniorLecturer,
                    data.members.edges.map((n) => n.node)
                  )}
                </td>
              </tr>
              {subjectData.instructors && (
                <tr>
                  <td>
                    <span>{t('education.subjects.datasheet.instructors')}</span>
                  </td>
                  <td className="px-2 d-flex flex-column align-items-start">
                    {subjectData.instructors.map((instructor, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <React.Fragment key={index}>
                        {PersonTemplate(
                          instructor,
                          data.members.edges.map((n) => n.node)
                        )}
                      </React.Fragment>
                    ))}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Layout>
  )
}

export default SubjectTemplate

export const query = graphql`
  query SubjectTemplateQueries($subjectId: String!, $mdxId: String!, $language: String!) {
    subject: subjectsYaml(parent: { id: { eq: $subjectId } }) {
      subjectName
      subjectDescription
      subjectCode
      type
      seniorLecturer {
        type
        mitId
        firstName
        lastName
      }
      instructors {
        type
        mitId
      }
      coverImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      parent {
        ... on File {
          name
        }
      }
    }
    subjectMdx: mdx(parent: { id: { eq: $mdxId } }) {
      id
      frontmatter {
        seniorLecturer {
          type
          mitId
        }
      }
    }
    members: allActiveYaml {
      edges {
        node {
          firstName
          lastName
          mitId
          avatar {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
    locales: allLocale(filter: { ns: { in: ["education", "commons"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
