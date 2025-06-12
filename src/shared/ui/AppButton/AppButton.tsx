import clsx from 'clsx'

import type { ReactNode } from 'react'

import s from './AppButton.module.scss'

export interface Props {
  children: ReactNode
  variant?: 'border' | 'button'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}
export function AppButton({
  onClick,
  children,
  variant = 'border',
  className,
  type = 'button',
  ...props
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
