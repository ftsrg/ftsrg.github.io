import { ImageDataLike } from 'gatsby-plugin-image'

export default interface MemberProps {
  firstName: string
  lastName: string
  namePrefix?: string
  nameSuffix?: string
  title?: string
  position?: string
  order?: number
  avatar?: ImageDataLike
  linkedInPage?: string
  homePage?: string
  mtmtPage?: string
  githubPage?: string
  twitterPage?: string
  cvPage?: string
  dblpPage?: string
  orcidPage?: string
  scholarPage?: string
  inMemoriam?: boolean
}
