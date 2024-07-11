import { MemberProps } from '~utils/props'
import { TFunction } from 'i18next'

export function memberCoreName(t: TFunction<'translation', undefined, 'translation'>, props: MemberProps) {
  return t('about.members.name', {
    firstName: props.firstName,
    lastName: props.lastName
  })
}

export function memberName(t: TFunction<'translation', undefined, 'translation'>, props: MemberProps) {
  return `${props.namePrefix ? `${props.namePrefix} ` : ''}${memberCoreName(t, props)}${props.nameSuffix ? ` ${props.nameSuffix}` : ''}`
}
