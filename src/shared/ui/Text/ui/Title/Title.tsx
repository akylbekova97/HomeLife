import clsx from 'clsx'

import type { ReactNode } from 'react'

import s from './Title.module.scss'

interface Props {
  className?: string
  children: ReactNode
  size?:
    | 'xl-36'
    | 'lg-30'
    | 'md-28'
    | 'md-20'
    | 'ms-20 '
    | 'sm-18'
    | 'sm-16'
    | 'ms-14'
}

export function Title({ className, children, size = 'md-28' }: Props) {
  return <p className={clsx(s.title, s[size], className)}>{children}</p>
}
