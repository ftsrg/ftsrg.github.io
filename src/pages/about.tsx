import { graphql, PageProps } from 'gatsby'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface AboutPageProps extends PageProps {
  data: {
    siteBuildMetadata: {
      buildTime: string
    }
  }
}

export const pageQuery = graphql`
  query {
    siteBuildMetadata {
      buildTime(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
    }
  }
`

const AboutPage: FC<AboutPageProps> = ({ data, path }) => {
  const { buildTime } = data.siteBuildMetadata
  const { t } = useTranslation()
  return <div>asd</div>
}

export default AboutPage
