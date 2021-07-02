import { ImageDataLike } from 'gatsby-plugin-image'

export default interface PublicationProps {
  journalTitle: string
  year: number
  title: string
  url: string
  featuredImage: ImageDataLike
}
