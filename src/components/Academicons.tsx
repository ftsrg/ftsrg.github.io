import React from 'react'

type AiProps = {
  aiClass: string
  style: Record<string, unknown>
  size: string
}

type Props = {
  style: Record<string, unknown>
  size: string
}

const Ai: React.FC<AiProps> = ({ aiClass, style, size }) => {
  return (
    <i
      className={`ai ${aiClass}`}
      style={{ ...style, width: size, height: size, fontSize: size, verticalAlign: 'middle', marginTop: '1px' }}
    />
  )
}

export const AiAcm: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-acm-square', style, size })
}

export const AiCV: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-cv-square', style, size })
}

export const AiDoi: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-doi-square', style, size })
}

export const AiDblp: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-dblp-square', style, size })
}

export const AiGoogleScholar: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-google-scholar-square', style, size })
}

export const AiMtmt: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-mtmt-square', style, size })
}

export const AiOpenAccess: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-open-access-square', style, size })
}

export const AiOpenData: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-open-data-square', style, size })
}

export const AiOrcid: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-orcid-square', style, size })
}

export const AiZenodo: React.FC<Props> = ({ style, size }) => {
  return Ai({ aiClass: 'ai-zenodo-square', style, size })
}
