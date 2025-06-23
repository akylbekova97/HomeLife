import { clsx } from 'clsx'

import type { ChangeEvent } from 'react'

import s from './Input.module.scss'

interface Props {
  isError?: boolean
  className?: string
  placeholder?: string
  type?: string
  rightIcon?: boolean | string
  onRightClick?: () => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const Input = ({
  isError,
  className,
  rightIcon,
  placeholder,
  type,
  value,
  onRightClick,
  onChange,
}: Props) => (
  <div className={clsx(s.wrapper)}>
    <input
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={clsx(
        s.input,
        rightIcon && s.hasRightIcon,
        isError && s.error,
        className,
      )}
    />

    {rightIcon && (
      <span
        className={s.iconRight}
        onClick={onRightClick}
      >
        {typeof rightIcon === 'string' ? (
          <img
            src={rightIcon}
            alt="icon"
          />
        ) : (
          rightIcon
        )}
      </span>
    )}
  </div>
)
