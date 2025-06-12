import clsx from 'clsx'

import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import s from './AppLink.module.scss'

interface Props {
  className?: string
  children: ReactNode
  size?: 'sm-16' | ''
  type?: 'medium' | 'bold' | 'regular'
  color?: 'blue' | ''
  link?: string | ''
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export function AppLink({
  className,
  children,
  size = '',
  type = 'regular',
  color = '',
  link = '',
  onClick,
}: Props) {
  return (
    <Link
      to={link}
      onClick={onClick}
      className={clsx(s.link, s[size], s[type], s[color], className)}
    >
      {children}
    </Link>
  )
}
