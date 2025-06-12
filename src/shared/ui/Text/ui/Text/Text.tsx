import clsx from 'clsx'

import type { ReactNode } from 'react'

import s from './Text.module.scss'

interface Props {
  className?: string
  children: ReactNode
  size?: 'sm-16' | 'md-20' | 'sm-18' | 'sm-14' | 'sm-12'
  color?: 'red' | ''
}

export function Text({
  className,
  children,
  size = 'sm-16',
  color = '',
}: Props) {
  return (
    <p className={clsx(s.text, s[size], s[color], className)}>{children}</p>
  )
}
