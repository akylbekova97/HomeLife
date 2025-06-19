import { clsx } from 'clsx'

import s from './Input.module.scss'

interface Props {
  isError?: boolean
  className?: string
  placeholder?: string
  type?: string
  rightIcon?: boolean | string
  onRightClick?: () => void
}

export const Input = ({
  isError,
  className,
  rightIcon,
  placeholder,
  type,
  onRightClick,
}: Props) => (
  <div className={clsx(s.wrapper)}>
    <input
      placeholder={placeholder}
      type={type}
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
        {typeof rightIcon === 'string' ? <img src={rightIcon} /> : rightIcon}
      </span>
    )}
  </div>
)
