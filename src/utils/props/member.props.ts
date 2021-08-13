import { ImageDataLike } from 'gatsby-plugin-image'

export default interface MemberProps {
  firstName: string
  lastName: string
  title?: string
  position?: string
  avatar?: ImageDataLike
  linkedInPage?: string
  homePage?: string
  scholarPage?: string
  githubPage?: string
  twitterPage?: string
}
