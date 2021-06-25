import { ImageDataLike } from 'gatsby-plugin-image'

export default interface ProjectProps {
  title: string
  subtitle: string
  url: string
  featuredImage: ImageDataLike
}
