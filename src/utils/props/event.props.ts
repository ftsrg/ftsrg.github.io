import { ImageDataLike } from 'gatsby-plugin-image'

interface EventProps {
  title: string
  subtitle: string
  desc: string
  url: string
  featuredImage: ImageDataLike
}

export default EventProps
