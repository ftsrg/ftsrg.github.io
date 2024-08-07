import { MemberProps } from '~utils/props'
import { TFunction } from 'i18next'
import { memberCoreName } from '~utils/member-name'

export const positionOrder = [
  'prof',
  'assocProfHabil',
  'assocProf',
  'honAssocProf',
  'assistProf',
  'masterLecturer',
  'resFellow',
  'assistResFellow',
  'phdStudent'
]

export function memberSort(t: TFunction<'translation', undefined, 'translation'>) {
  return (member1: MemberProps, member2: MemberProps) => {
    const pos1 = positionOrder.indexOf(member1.position || '')
    const pos2 = positionOrder.indexOf(member2.position || '')

    if (pos1 === pos2) {
      if (member1.order === member2.order) {
        return memberCoreName(t, member1).trim().localeCompare(memberCoreName(t, member2).trim())
      }
      return (member2.order || 0) - (member1.order || 0)
    }
    return pos1 - pos2
  }
}
