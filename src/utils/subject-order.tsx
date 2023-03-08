import { TFunction } from 'i18next'
import { SubjectProps } from '~utils/props'

export const typeOrder = [
  'education.subjects.types.bsc',
  'education.subjects.types.bscSpec',
  'education.subjects.types.msc',
  'education.subjects.types.mscSpec',
  'education.subjects.types.phd',
  'education.subjects.types.elective'
]

export function subjectSort(t: TFunction<'translation', undefined, 'translation'>) {
  return (subject1: SubjectProps, subject2: SubjectProps) => {
    const pos1 = typeOrder.indexOf(subject1.type)
    const pos2 = typeOrder.indexOf(subject2.type)

    if (pos1 === pos2) {
      return t(subject1.subjectName).localeCompare(t(subject2.subjectName))
    }
    return pos1 - pos2
  }
}
