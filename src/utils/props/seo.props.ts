import { HelmetProps } from 'react-helmet'

export default interface SEOProps extends HelmetProps {
  lang?: string
  title?: string
  description?: string
  author?: string
  image?: string
  favicons?: {
    favicon32: string
    favicon16: string
  }
  robots?: string
  keywords?: string[]
  meta?: { name: string; content: string }[]
  links?: { rel: string; href: string }[]
}
