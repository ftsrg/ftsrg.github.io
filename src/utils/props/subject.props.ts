import { ImageDataLike } from 'gatsby-plugin-image'

export interface FtsrgInstructorProps {
  type: 'ftsrg'
  mitId: string
}

export interface ExternalInstructorProps {
  type: 'external'
  firstName: string
  lastName: string
}

export default interface SubjectProps {
  subjectName: string
  subjectCode: string
  subjectDescription: string
  thumbnailImage: ImageDataLike
  coverImage: ImageDataLike
  type: string
  seniorLecturer: FtsrgInstructorProps | ExternalInstructorProps
  instructors: (FtsrgInstructorProps | ExternalInstructorProps)[]
}
