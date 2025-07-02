import { clsx } from 'clsx'

import { type ChangeEvent, memo } from 'react'

import s from './Input.module.scss'

interface Props {
  className?: string
  placeholder?: string
  type?: string
  rightIcon?: boolean | string
  onRightClick?: () => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  checked?: boolean
}

export const InputComponent = ({
  className,
  rightIcon,
  placeholder,
  type,
  value,
  onRightClick,
  onChange,
}: Props) => (
  <>
    <input
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={clsx(s.input, rightIcon && s.hasRightIcon, className)}
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
  </>
)

export const Input = memo(InputComponent)
