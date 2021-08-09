import { ImageDataLike } from 'gatsby-plugin-image'

export default interface SubjectProps {
  translationPrefix: string
  featuredImage: ImageDataLike
  type: string
  portalPage: string
  webPage: string
}
