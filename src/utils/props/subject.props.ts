import { ImageDataLike } from 'gatsby-plugin-image'

export default interface SubjectProps {
  title: string
  featuredImage: ImageDataLike
  type: string
  heading: string
  description: string
  portalPage: string
  webPage: string
}
